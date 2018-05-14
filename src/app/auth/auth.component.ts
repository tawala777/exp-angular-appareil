import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  authStatus: boolean;
  isAuthSubscription: Subscription;

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit() {
    this.isAuthSubscription = this.authSrv.isAuthSubject.subscribe(
      (authSt: boolean) => {
        this.authStatus = authSt;
      }
    );
    this.authSrv.emitisAuthSubject();
  }
  onSeConnecter(){
    console.log('on se connecte !');
    this.authSrv.signIn().then (
      () => {
        this.authStatus = this.authSrv.getAuth();
        console.log('je suis connecté = ',this.authStatus);
        //this.router.navigate(['appareils']);
      }
    )
  }
  onSeDeconnecter(){
    console.log('on se deconnecte !');
    this.authSrv.signOut();
    this.authStatus = this.authSrv.getAuth();
    console.log('je suis connecté = ',this.authStatus);
  }
  ngOnDestroy() {
    this.isAuthSubscription.unsubscribe();
  }
}
