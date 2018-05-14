import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-compo-view',
  templateUrl: './compo-view.component.html',
  styleUrls: ['./compo-view.component.css']
})

export class CompoViewComponent implements OnInit {
  appareils : any[];
  appareilSubscription: Subscription;

  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  
  constructor(private appSrv: AppareilService) { 
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }


  ngOnInit() {
    /* BAD PRACTICE !*/ 
    //this.appareils = this.appSrv.appareils;
    
    /* BETTER PRACTICE */
    this.appareilSubscription = this.appSrv.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appSrv.emitAppareilSubject();

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
  onSaveMonFirebase() {
    this.appSrv.saveAppareilsToServer();
  }
}
