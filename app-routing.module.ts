import { AuthGuard } from './Auth/auth.guard';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './Company/company-list/company-list.component';
import { CompanyEditComponent } from './Company/company-edit/company-edit.component';
import { ContactListComponent } from './Contact/contact-list/contact-list.component';
import { ContactEditComponent } from './Contact/contact-edit/contact-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'company-list', component: CompanyListComponent, canActivate: [AuthGuard] },
  { path: 'company-edit/:id', component: CompanyEditComponent, canActivate: [AuthGuard] },
  { path: 'contact-list', component: ContactListComponent, canActivate: [AuthGuard] },
  { path: 'contact-edit/:id', component: ContactEditComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }