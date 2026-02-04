import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { MobileMenuService, NAV_SECTIONS } from './services/mobile-menu.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false,
    animations: [
        trigger('menuOverlay', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('200ms ease-out', style({ opacity: 1 }))
            ]),
            transition(':leave', [
                animate('180ms ease-in', style({ opacity: 0 }))
            ])
        ]),
        trigger('menuPanel', [
            transition(':enter', [
                style({ transform: 'translateY(-100%)', opacity: 0 }),
                animate('280ms cubic-bezier(0.32, 0.72, 0, 1)', style({ transform: 'translateY(0)', opacity: 1 }))
            ]),
            transition(':leave', [
                animate('220ms cubic-bezier(0.32, 0.72, 0, 1)', style({ transform: 'translateY(-100%)', opacity: 0 }))
            ])
        ])
    ]
})
export class AppComponent {
  title = 'essomani';
  readonly navSections = NAV_SECTIONS;

  constructor(public menuService: MobileMenuService) {}

  onMobileNavClick(sectionId: string, event: Event): void {
    event.preventDefault();
    this.menuService.closeAndScrollTo(sectionId);
  }
}
