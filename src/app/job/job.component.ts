import { UserService } from './user.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  title = 'Candidate';
  reactiveForm:any=FormGroup;
  //public userFile:any=File;

 /* boards=[{'id':1,'name':'CBSE'},{'id':2,'name':'ICSE'},{'id':3,'name':'IB'},
{'id':4,'name':'STATEBOARD'}];*/
  constructor(private fb:FormBuilder,private userService:UserService) { }

  ngOnInit() {
    this.reactiveForm=this.fb.group({
      firstName:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[a-zA-z ]*'),Validators.minLength(3)
      ])] ),
      lastName:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[a-zA-z ]*'),Validators.minLength(3)
      ])] ),
      username:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')
      ])] ),
      password:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),Validators.minLength(8),
        Validators.maxLength(15)
      ])] )
    /*  gender:new FormControl('',Validators.required ),
      address:new FormControl('',Validators.required),
      phoneNumber:new FormControl('',[Validators.required,Validators.compose([
        Validators.pattern('[0-9+ ]*'),Validators.minLength(10),Validators.maxLength(14)
      ])] ),
      board:new FormControl('',Validators.required),
      ssc_percentage:new FormControl('',Validators.required),
      ssc_school:new FormControl('',Validators.required),
      ssc_school_location:new FormControl('',Validators.required),
      inter_percentage:new FormControl('',Validators.required),
      inter_school:new FormControl('',Validators.required),
      inter_school_location:new FormControl('',Validators.required),*/
     // highest_qualifications:this.fb.array([this.addQualificationGroup()])
     /////////////////////////////////////////////Nested Form////////////////////

    // companies:this.fb.array([
      // this.addCompanies()
     //])
    });
   }

  /* addCompanies():FormGroup{
     return this.fb.group({
       companyName:['',Validators.required],
       designation:['',Validators.required],
       duration_from:['',Validators.required],
       duration_to:['',Validators.required],
       responsiblity:['',Validators.required]
     })
   }

   addCompanyButtonClick():void{
   (<FormArray>this.reactiveForm.get('companies')).push(this.addCompanies());
   }

   removeCompany(companyIndex:number){
    (<FormArray>this.reactiveForm.get('companies')).removeAt(companyIndex);
   }*/

   saveForm(submitForm:FormGroup){
    if(submitForm.valid){
    // console.log(submitForm.value);
    // this.reactiveForm.reset();
     const user =submitForm.value;
     const formData=new FormData();
     formData.append('user',JSON.stringify(user));
  //   formData.append('file',this.userFile);
     this.userService.saveUserProfile(formData).subscribe((response=>{
       console.log(response);
     }))
    }else{
     this.validateFormFields(submitForm);
    }
  }

  validateFormFields(submitForm:FormGroup){
     Object.keys(submitForm.controls).forEach(field=>{
       const control=submitForm.get(field);
       if(control instanceof FormControl){
         control.markAsTouched({
           onlySelf:true
         });

         }else if(control instanceof FormGroup){
           this.validateFormFields(control);
         }
       }
     )}
             
    
  }


