import { Component, HostListener, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';

/** IDs de las secciones del navbar (en orden de aparición en la página) */
const NAV_SECTION_IDS = ['home', 'services', 'specialities', 'projects', 'us', 'contact'] as const;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false
})
export class NavbarComponent implements OnInit, AfterViewInit {
  /** ID de la sección actualmente visible (scroll spy) */
  activeSection: string = 'home';

  readonly navSections: { id: string; label: string }[] = [
    { id: 'services', label: 'Servicios' },
    { id: 'specialities', label: 'Especialidades' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'us', label: 'Nosotros' },
    { id: 'contact', label: 'Contacto' }
  ];

  /** Offset desde el top para considerar una sección "activa" (altura del navbar + margen) */
  private readonly scrollOffset = 120;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.updateActiveSection();
  }

  ngAfterViewInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateActiveSection();
  }

  /** Determina qué sección está en vista y actualiza activeSection (scroll spy). */
  private updateActiveSection(): void {
    let current: string = NAV_SECTION_IDS[0];

    for (const id of NAV_SECTION_IDS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      // La sección cuya parte superior ha pasado el offset es la "activa"
      if (rect.top <= this.scrollOffset) {
        current = id;
      }
    }

    if (current !== this.activeSection) {
      this.activeSection = current;
      this.cdr.detectChanges();
    }
  }

  isActive(id: string): boolean {
    return this.activeSection === id;
  }

  /** Hace scroll suave hasta la sección con el ID dado. Evita la navegación por hash. */
  scrollToSection(id: string, event: Event): void {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
