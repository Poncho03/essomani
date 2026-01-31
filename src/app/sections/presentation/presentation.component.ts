import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
})
export class PresentationComponent {
  /** Hace scroll suave hasta la sección con el ID dado. */
  scrollToSection(id: string, event: Event): void {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
