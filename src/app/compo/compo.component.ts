import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-compo',
  templateUrl: './compo.component.html',
  styleUrls: ['./compo.component.css']
})
export class CompoComponent implements OnInit {
  @Input() compoName: string;
  @Input() compoStatus: string;
  @Input() index: number;
  

  constructor(private appSrv: AppareilService) { }

  ngOnInit() {
  }
  getStatus() {
    return this.compoStatus+'!';
  }
  onAllumer2() {
    this.appSrv.allumerOne(this.index);
  }  
  onEteindre2() {
    this.appSrv.eteindreOne(this.index);
  }
  getColor() {
    if (this.compoStatus == 'allumé') return 'blue'
    else if (this.compoStatus == 'éteint') return 'orange' 
    else return 'black';
  }
  onSwitch() {
    if(this.compoStatus === 'allumé') {
      this.appSrv.eteindreOne(this.index);
    } else if(this.compoStatus === 'éteint') {
      this.appSrv.allumerOne(this.index);
    }
  }
}
