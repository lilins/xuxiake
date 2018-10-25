import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { IndexComponent, TimeBarComponent, SearchBarComponent, CityFormComponent } from './Components';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TimeBarComponent,
    SearchBarComponent,
    CityFormComponent
  ],
  imports: [
    HttpClientModule,
    TooltipModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
