import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductsComponent } from './pages/products/products.component';
import { PrivacyComponent } from './pages/info/privacy/privacy.component';
import { FaqsComponent } from './pages/info/faqs/faqs.component';
import { DevelopmentComponent } from './pages/info/development/development.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'our-people', component: CompaniesComponent },
  { path: 'services', component: ProductsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'development', component: DevelopmentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
