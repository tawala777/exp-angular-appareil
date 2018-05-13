import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  isAuth = false;
//  lastUpdate = new Date();
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  
  appareils : any[];

  constructor(private appSrv: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  ngOnInit() {
    /* BAD PRACTICE !*/ 
    this.appareils = this.appSrv.appareils;
  }
  onAllumer() {
    console.log('On allume tout !');
    this.appSrv.allumerTout();
  }  
  onEteindre() {
    console.log('On éteint tout !');
    
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appSrv.eteindreTout();
    } else {
      return null;
    }
  } 
}