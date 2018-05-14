import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo-edit',
  templateUrl: './compo-edit.component.html',
  styleUrls: ['./compo-edit.component.css']
})
export class CompoEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form) {
    console.log(form.value)
  }
}
