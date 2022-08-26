import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { SharedService } from '../sharedservice.service';

@Component({
  selector: 'app-usecube',
  templateUrl: './usecube.component.html',
  styleUrls: ['./usecube.component.css']
})
export class UsecubeComponent implements OnInit {
name_cube:any;
  constructor(private service:SharedService,public fb: FormBuilder) { }
  registrationForm = this.fb.group({
    cubename: new FormControl(null,[Validators.required]),});
      
  
  
  onSubmit(): void {
    console.log(this.registrationForm);
  }  get cubename() { return this.registrationForm.get('cubename');}  
namecube:any;
  ngOnInit(): void { 
  //  function pour show le cube
   this.service.showcube().subscribe((res:any)=>{
  this.namecube=res;
  });
  


}

}

