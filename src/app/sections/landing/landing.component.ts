import { Component } from '@angular/core';
import { PresentationComponent } from '../presentation/presentation.component';
import { WhyComponent } from '../why/why.component';
import { OurServicesComponent } from '../our-services/our-services.component';
import { SpecialitiesComponent } from '../specialities/specialities.component';
import { ProjectsComponent } from '../projects/projects.component';
import { UsComponent } from '../us/us.component';
import { CompaniesComponent as CompaniesSectionComponent } from '../companies/companies.component';
import { ContactComponent as ContactSectionComponent } from '../contact/contact.component';
import { ContactBannerComponent } from '../contact-banner/contact-banner.component';

@Component({
  selector: 'app-landing',
  imports: [
    PresentationComponent,
    WhyComponent,
    OurServicesComponent,
    SpecialitiesComponent,
    ProjectsComponent,
    UsComponent,
    CompaniesSectionComponent,
    ContactSectionComponent,
    ContactBannerComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
