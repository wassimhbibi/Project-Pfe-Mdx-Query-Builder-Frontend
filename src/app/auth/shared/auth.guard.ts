import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import { SharedService } from "src/app/sharedservice.service";


@Injectable()
export class AuthGuard implements CanActivate{
   constructor( private router : Router,private service:SharedService){}
    canActivate(route:ActivatedRouteSnapshot ,state: RouterStateSnapshot):boolean{

        if(this.service.isloggedin){
     return this.service.isloggedin;
     

        }else{
            
            this.router.navigate([''])
            return false;
        }
     
    }

}