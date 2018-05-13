import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompoComponent } from './compo/compo.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { CompoViewComponent } from './compo-view/compo-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CompoComponent,
    AuthComponent,
    CompoViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
