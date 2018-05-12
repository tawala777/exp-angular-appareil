import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo',
  templateUrl: './compo.component.html',
  styleUrls: ['./compo.component.css']
})
export class CompoComponent implements OnInit {
  compoName:string = 'Ordinateur';
  compoStatus:string = 'éteint';

  constructor() { }

  ngOnInit() {
  }
  getStatus() {
    return this.compoStatus+'0';
  }
  onAllumer2() {
    this.compoStatus='allumé';
  }
}
