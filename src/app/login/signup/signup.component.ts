import { Component,  ElementRef, OnInit, ViewChild  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {BankService} from '../../shared/bank.service';
import {AppRoutingModule} from '../../app-routing.module'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  UserRegistrationForm : FormGroup
  constructor(private BankService:BankService, private router:Router) { this.UserRegistrationForm = new FormGroup({
    username : new FormControl('' , [Validators.required]),
    email : new FormControl('' , [Validators.email , Validators.required]),
    password : new FormControl('' , [Validators.required]),
    
  })}

  ngOnInit(): void {
  }
  OnSubmit(data:any) {
    // console.log("shgvhgs", data);
    this.BankService.register(data.value).subscribe(res =>{
      this.router.navigate(['/login'])
    })
  }

}
