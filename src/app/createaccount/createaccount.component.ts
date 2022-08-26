import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {SharedService} from 'src/app/sharedservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {


  constructor(private service:SharedService,private router:Router , private toastr:ToastrService ) { }
  @Input() log:any;
  userid: any ;
  username:any ;
  userpassword: any ;
  createaccountform:any;
ngOnInit(): void {
//validiation the name and password and confirm password
  this.createaccountform=new FormGroup({
    "name":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    "pass":new FormControl(null,[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{6,}'),Validators.minLength(8)]),
    "confpass":new FormControl(null,[Validators.required])
  });
  this.userid=this.log.userid;
  this.username=this.log.username;
  this.userpassword=this.log.userpassword;
}


//submit function 
submitData()
{
console.log(this.createaccountform.value);
}
get name(){return this.createaccountform.get('name');}
get pass(){return this.createaccountform.get('pass');}
get confpass(){return this.createaccountform.get('confpass');}

verif(){
  
  var val = {
    username:this.username,
    userpassword:this.userpassword}   
this.service.rech(val).subscribe(res=>{(res.toString());
 
  if(res==true){
    
this.router.navigateByUrl("/createaccount");
this.createaccountform.reset();
this.toastr.error("USER NAME OR PASSWORD IS EXIST TRY AGAIN");

  }

else{
this.router.navigateByUrl("/useserver");
this.toastr.success('SUCCESSFULLY LOGGED IN');
this.service.addlogin(val).subscribe(res=>{
  (res.toString());
  });

} }




);


}


}
