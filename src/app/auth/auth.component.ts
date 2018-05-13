import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authStatus: boolean;

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onSeConnecter(){
    console.log('on se connecte !');
    this.authSrv.signIn().then (
      () => {
        this.authStatus = this.authSrv.isAuth;
        console.log('je suis connecté = ',this.authStatus);
        this.router.navigate(['appareils']);
      }
    )

  }
  onSeDeconnecter(){
    console.log('on se deconnecte !');
    this.authSrv.signOut();
    this.authStatus = this.authSrv.isAuth;
    console.log('je suis connecté = ',this.authStatus);
  }
}
