import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/User.model';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  userForm: FormGroup;

  constructor(private frmBldr: FormBuilder,
              private usrSrv: UserService,
              private rtr: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.userForm = this.frmBldr.group({
      firstName: '',
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      drinkPreference: '',
      hobbies: this.frmBldr.array([])
    });
  }
  onSubmitForm(){
    const formVal = this.userForm.value;
    const newUser = new User(
      formVal['firstName'],
      formVal['lastName'],
      formVal['email'],
      formVal['drinkPreference'],
      formVal['hobbies'] ? formVal['hobbies'] : []
    );
    this.usrSrv.addUser(newUser);
    this.rtr.navigate(['/users']);
  }
  getHobbies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }
  onAddHobby() {
    const newHobbyControl = this.frmBldr.control(null, Validators.required);
    this.getHobbies().push(newHobbyControl);
  }
}
