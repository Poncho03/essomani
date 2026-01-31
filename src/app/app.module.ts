import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from './pages/info/privacy/privacy.component';
import { FaqsComponent } from './pages/info/faqs/faqs.component';
import { DevelopmentComponent } from './pages/info/development/development.component';

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
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CompaniesComponent,
    PageNotFoundComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    CarouselComponent,
    PrivacyComponent,
    FaqsComponent,
    DevelopmentComponent
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
