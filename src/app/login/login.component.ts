import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {SharedService} from 'src/app/sharedservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public recaptchaform!:FormGroup;

  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;


siteKey : any;
theme : any;
size:any;
type:any;
lang:any;
cdr: any;
  constructor(private service:SharedService,private router:Router , private toastr:ToastrService, public formbuilder:FormBuilder) { 
  
    this.siteKey='6LeUdkcfAAAAAKFKqmJ9lCLvniaveUYFo6UZT08G';
    this.theme= 'Dark';
    this.type='image';
    this.lang="en"
    
    
   
  }

  
  loginform:any;

  
  @Input() log:any;
  
  username:any ;
  userpassword: any ;

 
  ngOnInit(): void {
    
    this.recaptchaform=this.formbuilder.group({
      recaptcha:['',Validators.required]

    });

    
    this.siteKey='6LeUdkcfAAAAAKFKqmJ9lCLvniaveUYFo6UZT08G';
    

    this.loginform=new FormGroup({
     
  
      "name":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]),
      "recaptcha":new FormControl(null,[Validators.required]),
      "pass":new FormControl(null,[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[0-9A-Za-zd$@$!%*?&].{6,}'),Validators.minLength(8)])
    
      
    })
   
 
    this.username=this.log.username;
    this.userpassword=this.log.userpassword;
    
      
     
    
  }
 
  
//submit function 
submitData()
{
  console.log(this.loginform.value);
  
  

}

get name(){return this.loginform.get('name');}
get pass(){return this.loginform.get('pass');}



rech(){
  
  var val = {
    username:this.username,
    userpassword:this.userpassword}  
   
this.service.rech(val).subscribe(res=>{(res.toString());
  
  if(res==true){

  
     
this.router.navigateByUrl('/useserver');
this.toastr.success("Login success");
this.service.setloggedin(true)



  }

else{
  
this.router.navigateByUrl("");
this.loginform.reset();

this.toastr.error('Username or Password invalid');



} }




);


}



}
