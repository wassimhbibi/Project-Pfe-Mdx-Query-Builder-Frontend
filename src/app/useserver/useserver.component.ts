import { Component, OnInit } from '@angular/core';
import { Validators,FormControl,FormBuilder } from '@angular/forms';
import {SharedService} from 'src/app/sharedservice.service';

@Component({
  selector: 'app-useserver',
  templateUrl: './useserver.component.html',
  styleUrls: ['./useserver.component.css']
})
export class UseserverComponent implements OnInit {
  
  chooseserver:any;
  constructor(private service:SharedService,public fb: FormBuilder) {}
  registrationForm = this.fb.group({
    servername: new FormControl(null,[Validators.required]),});
 
  
  
  onSubmit(): void {
    console.log(this.registrationForm);
  }  
    get servername() { return this.registrationForm.get('servername');}

  
nameserve:any;
  ngOnInit(): void { 
   this.service.showserver().subscribe((res:any)=>{
  this.nameserve=res;
  });
  


}
}
