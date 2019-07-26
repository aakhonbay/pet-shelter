import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowAllPetsComponent } from './pets/show-all-pets/show-all-pets.component';
import { ShowOnePetsIdComponent } from './pets/show-one-pets-id/show-one-pets-id.component';
import { CreatePetsNewComponent } from './pets/create-pets-new/create-pets-new.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditPetsIdEditComponent } from './pets/edit-pets-id-edit/edit-pets-id-edit.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule,
  MatListModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ShowAllPetsComponent,
    ShowOnePetsIdComponent,
    CreatePetsNewComponent,
    EditPetsIdEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
