import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';


import { AppComponent } from './app.component';
import { CompoComponent } from './compo/compo.component';
import { AuthComponent } from './auth/auth.component';
import { CompoViewComponent } from './compo-view/compo-view.component';
import { SingleCompoComponent } from './single-compo/single-compo.component';


import { Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'appareils', component: CompoViewComponent },
  { path: 'appareils/:id', component: SingleCompoComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: CompoViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CompoComponent,
    AuthComponent,
    CompoViewComponent,
    SingleCompoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppareilService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
