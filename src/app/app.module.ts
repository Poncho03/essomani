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
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from './pages/info/privacy/privacy.component';
import { FaqsComponent } from './pages/info/faqs/faqs.component';
import { DevelopmentComponent } from './pages/info/development/development.component';

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
