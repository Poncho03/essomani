import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from './pages/info/privacy/privacy.component';
import { FaqsComponent } from './pages/info/faqs/faqs.component';

import { PresentationComponent } from './sections/presentation/presentation.component';
import { WhyComponent } from './sections/why/why.component';
import { OurServicesComponent } from './sections/our-services/our-services.component';
import { SpecialitiesComponent } from './sections/specialities/specialities.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { UsComponent } from './sections/us/us.component';
import { CompaniesComponent as CompaniesSectionComponent } from './sections/companies/companies.component';
import { ContactComponent as ContactSectionComponent } from './sections/contact/contact.component';
import { ContactBannerComponent } from './sections/contact-banner/contact-banner.component';
import { LandingComponent } from './sections/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    PrivacyComponent,
    FaqsComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    PresentationComponent,
    WhyComponent,
    OurServicesComponent,
    SpecialitiesComponent,
    ProjectsComponent,
    UsComponent,
    CompaniesSectionComponent,
    ContactSectionComponent,
    ContactBannerComponent,
    LandingComponent
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule { }
