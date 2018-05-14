import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compo-edit',
  templateUrl: './compo-edit.component.html',
  styleUrls: ['./compo-edit.component.css']
})
export class CompoEditComponent implements OnInit {
  defaultOnOff = 'éteint';
  constructor(private appSrv: AppareilService,
    private router: Router) { 

  }

  ngOnInit() {
  }
  onSubmit(form:NgForm) {
    console.log(form.value);
    this.appSrv.ajouterOne(form.value['name'],form.value['status']);
    this.router.navigate(['/appareils']);
  }
}
