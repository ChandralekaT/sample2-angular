import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candid',
  templateUrl: './candid.component.html',
  styleUrls: ['./candid.component.css']
})
export class CandidComponent implements OnInit {

  nestedReactiveForm:any=FormGroup;

  constructor(private fb:FormBuilder){

  }

  ngOnInit() {
  this.nestedReactiveForm=this.fb.group({
    userforms:this.fb.array([
      this.userForm()
    ])
  });
  }
  userForm():FormGroup{

return this.fb.group({
  firstName:['',Validators.compose([
    Validators.required,Validators.pattern('[a-zA-z]*'),Validators.
    minLength(3)
  ])],
  
  lastName:['',Validators.compose([
    Validators.required,Validators.pattern('[a-zA-z]*'),Validators.
    minLength(3)
  ])],

  email:['',Validators.compose([
    Validators.required,Validators.pattern('[a-zA-z]*'),Validators.
    minLength(3)
  ])],

  phoneNumber:['',Validators.compose([
    Validators.required,Validators.pattern('[a-zA-z]*'),Validators.
    minLength(8),Validators.maxLength(15)
  ])],

 
});
  }

  addNewForm():void{
    const control=this.nestedReactiveForm.controls.userforms;
    control.push(this.userForm());
  }
  removeSelectedForm(index:number){
    const control=this.nestedReactiveForm.controls.userforms;
    control.removeAt(index);
  }

}
