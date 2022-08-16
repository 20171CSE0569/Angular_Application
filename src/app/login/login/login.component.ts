import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {BankService} from '../../shared/bank.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserForm : FormGroup;
  logginerrormeassage:any;
  loginData:any;
  isloggedIn:boolean | undefined;
  constructor(private BankService:BankService,private router:Router) {    this.loginUserForm = new FormGroup({
    email : new FormControl('' , [Validators.email , Validators.required]),
    password : new FormControl('' , Validators.required)
  })}

  ngOnInit(): void {
  }
  OnSubmit(loginUserForm:any) {
    if(this.loginUserForm.valid)
    {
      // console.log("hdcvdhg",loginUserForm.value)
      this.BankService.login(loginUserForm.value).subscribe(res =>
        {
          // console.log("xvd", res);
          this.loginData=res;
          if(this.loginData.status == 'ok')
          {
            this.isloggedIn= true;
            this.router.navigate(['/bankdashboard'])
            this.BankService.setLoggedIn(true);
          }
          else{
            this.isloggedIn= false;
            this.logginerrormeassage="Invalid user name / user doesnt exist"
            
          }

        
        })
    }
    
    // .subscribe((res:any) => {
//      if(res && res['status'] === 'ok' res['loginUser']) {
//         console.log('User logged in Successfully')
//         localStorage.setItem('username' , res['data']['existUser']['username'])
// this.router.navigate(['/dashboard'])


// } else {
//       console.log('Not valid user')
// }
} 

}
