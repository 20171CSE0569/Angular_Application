import { Component, OnInit } from '@angular/core';
import {BankService} from '../shared/bank.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css'],
  providers:[BankService]
})
export class BankComponent implements OnInit {
   myForm!: FormGroup;
   public bankdetailsdata: any;
   selectedBank:any;
   updatedDate:any;
   commentalterid:any;
   showTable:any;

   hideRow=false;
  

  constructor(private BankService : BankService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      
      comments: ['', Validators.required],
 
      commentedDate: ['', Validators.required],
      
      



    }),
    this.getbankDetailsOnload();
    this.commentalterid;
  }
  onSubmit(formvalue:any) {
    let object={
      _id:this.commentalterid,
      comments:formvalue.value.comments,
      commentedDate:formvalue.value.commentedDate

    }
  
    this.BankService.updatecommentData(object).subscribe((res)=>{
    
      this.getbankDetailsOnload()
      this.myForm.reset();
      
    })
   
   
  }
  getbankDetailsOnload()
  {
    this.BankService.getBankDetailservice(null).subscribe((values) => {
      
      this.bankdetailsdata =values;
    });
  }

  SelecectedBankDetails(data:any)
  {
   
console.log("selected bank id", data);
this.BankService.getBankDetailsBySelcetion(data).subscribe(( res )=>{

      this.selectedBank = res;
      this.commentalterid= this.selectedBank._id;
    
      
}),
this.toggleShowTable();
  }
  toggleShowTable(): void {
    this.showTable = !this.showTable;
}
}
