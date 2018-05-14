import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';

import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CompoComponent } from './compo/compo.component';
import { AuthComponent } from './auth/auth.component';
import { CompoViewComponent } from './compo-view/compo-view.component';
import { CompoEditComponent } from './compo-edit/compo-edit.component';
import { SingleCompoComponent } from './single-compo/single-compo.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserNewComponent } from './user-new/user-new.component';



const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: CompoViewComponent },
  { path: 'edit', canActivate: [AuthGuard], component: CompoEditComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleCompoComponent },
  { path: 'contact', canActivate: [AuthGuard], component: ContactComponent },
  { path: 'users',  canActivate: [AuthGuard],component: UserListComponent },
  { path: 'user-new',  component: UserNewComponent },
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
    ContactComponent,
    CompoEditComponent,
    UserListComponent,
    UserNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppareilService,AuthService,AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
