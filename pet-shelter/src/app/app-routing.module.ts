import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowAllPetsComponent } from './pets/show-all-pets/show-all-pets.component';
import { ShowOnePetsIdComponent } from './pets/show-one-pets-id/show-one-pets-id.component';
import { CreatePetsNewComponent } from './pets/create-pets-new/create-pets-new.component';
import { EditPetsIdEditComponent } from './pets/edit-pets-id-edit/edit-pets-id-edit.component';

const routes: Routes = [
  { path: 'pets', component: ShowAllPetsComponent},
  { path: 'pets/new', component: CreatePetsNewComponent },
  { path: 'pets/:id/edit', component: EditPetsIdEditComponent },
  { path: 'pets/:id', component: ShowOnePetsIdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
