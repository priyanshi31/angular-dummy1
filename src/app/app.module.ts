import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewCompoentComponent } from './new-compoent/new-compoent.component';


@NgModule({
  declarations: [
    AppComponent,
    NewCompoentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
