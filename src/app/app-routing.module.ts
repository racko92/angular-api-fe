import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';
import { ContactResolver } from './shared/resolvers/contact.resolver';
import { LoginComponent } from './components/auth/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { GuestGuard } from './shared/guards/guest.guard';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ GuestGuard ],
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: ':id',
        component: ContactDetailsComponent,
        resolve: {
          contact: ContactResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
