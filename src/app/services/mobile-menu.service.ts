import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export const NAV_SECTIONS: { id: string; label: string }[] = [
  { id: 'services', label: 'Servicios' },
  { id: 'specialities', label: 'Especialidades' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'us', label: 'Nosotros' },
  { id: 'contact', label: 'Contacto' }
];

@Injectable({ providedIn: 'root' })
export class MobileMenuService {
  private readonly menuOpen$ = new BehaviorSubject<boolean>(false);

  get isOpen(): boolean {
    return this.menuOpen$.value;
  }

  get open$(): Observable<boolean> {
    return this.menuOpen$.asObservable();
  }

  toggle(): void {
    const next = !this.menuOpen$.value;
    this.menuOpen$.next(next);
    document.body.style.overflow = next ? 'hidden' : '';
  }

  close(): void {
    if (this.menuOpen$.value) {
      this.menuOpen$.next(false);
      document.body.style.overflow = '';
    }
  }

  closeAndScrollTo(sectionId: string): void {
    this.close();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
