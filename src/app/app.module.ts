import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent, TimeBarComponent, SearchBarComponent } from './Components';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TimeBarComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
