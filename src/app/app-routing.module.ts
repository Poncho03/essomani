import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PrivacyComponent } from './pages/info/privacy/privacy.component';
import { FaqsComponent } from './pages/info/faqs/faqs.component';
import { LandingComponent } from './sections/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
