import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo',
  templateUrl: './compo.component.html',
  styleUrls: ['./compo.component.css']
})
export class CompoComponent implements OnInit {
  @Input() compoName: string;
  @Input() compoStatus: string;
 

  constructor() { }

  ngOnInit() {
  }
  getStatus() {
    return this.compoStatus+'0';
  }
  onAllumer2() {
    this.compoStatus='allumé';
  }  
  onEteindre() {
    this.compoStatus='éteint';
  }
  getColor() {
    if (this.compoStatus == 'allumé') return 'blue'
    else if (this.compoStatus == 'éteint') return 'orange' 
    else return 'black';
  }
}
