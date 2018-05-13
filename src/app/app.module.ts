import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompoComponent } from './compo/compo.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';

@NgModule({
  declarations: [
    AppComponent,
    CompoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
