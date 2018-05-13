import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-compo-view',
  templateUrl: './compo-view.component.html',
  styleUrls: ['./compo-view.component.css']
})
export class CompoViewComponent implements OnInit {
  appareils : any[];
  isAuth = false;
  constructor(private appSrv: AppareilService) { }


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
