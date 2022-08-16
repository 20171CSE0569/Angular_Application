import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

import { Bank } from './bank.model';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private loggedInStatus = false;
  selectedBank: Bank | undefined;
  bank: Bank[] | undefined;
  baseURL = 'http://localhost:3000/bank';

  constructor(private http:HttpClient) { }
  setLoggedIn(value:boolean)
  {
    this.loggedInStatus = value;
  }
  get isLoggedIn()
  {
    return this.loggedInStatus;
  }
  getBankDetailservice(data:any)
  {
    console.log("servide file", data)
    return this.http.get(this.baseURL);

  }
  getBankDetailsBySelcetion(bankid:any)
  {
    return this.http.put(this.baseURL+ `/${bankid}`, bankid);
  }

  updatecommentData( data:any)
  {
    console.log("sjgdhg", data);
    return this.http.put(this.baseURL + `/${data._id}`, data);
  }
  login(userLoginDetails: any) {
    return this.http.post('http://localhost:3000/bank/login' , userLoginDetails)
 }
register(userSignUpDetails:any) {
     return this.http.post('http://localhost:3000/bank/register' , userSignUpDetails)
 }
}
