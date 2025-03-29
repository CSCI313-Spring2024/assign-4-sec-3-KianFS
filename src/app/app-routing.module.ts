import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactListComponent } from './contact-manager/contact-list/contact-list.component';
import { ContactAddComponent } from './contact-manager/contact-add/contact-add.component';
import { ContactEditComponent } from './contact-manager/contact-edit/contact-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'contacts/list' },
  { path: 'contacts/list', component: ContactListComponent },
  { path: 'contacts/add', component: ContactAddComponent },
  { path: 'contacts/edit/:id', component: ContactEditComponent },
  { path: '**', redirectTo: 'contacts/list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
