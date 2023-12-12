import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FanListComponent } from './features/fan/pages/fan-list/fan-list.component';
import { FanDetailsComponent } from './features/fan/pages/fan-details/fan-details.component';
import { FanCreateComponent } from './features/fan/pages/fan-create/fan-create.component';
import { FanUpdateComponent } from './features/fan/pages/fan-update/fan-update.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FanListComponent,
    FanDetailsComponent,
    FanCreateComponent,
    FanUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
