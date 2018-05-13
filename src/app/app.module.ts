import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CompoComponent } from './compo/compo.component';
import { AuthComponent } from './auth/auth.component';
import { CompoViewComponent } from './compo-view/compo-view.component';
import { SingleCompoComponent } from './single-compo/single-compo.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';


const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: CompoViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleCompoComponent },
  { path: 'contact', canActivate: [AuthGuard], component: ContactComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AuthComponent },
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    CompoComponent,
    AuthComponent,
    CompoViewComponent,
    SingleCompoComponent,
    NotfoundComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppareilService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
