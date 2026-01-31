import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-banner',
  imports: [],
  templateUrl: './contact-banner.component.html',
  styleUrl: './contact-banner.component.scss',
})
export class ContactBannerComponent {
  scrollToContact(event: Event): void {
    event.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
