import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SharedService {


 private  loginstat=false
 
 public SAVEME = [];
 
  readonly APIUrl="http://localhost:58771//api";
  
  constructor(private http:HttpClient , private toastr:ToastrService , private router :Router ) { }

  
  
 //implimentation    la  fonction add(post) de c# with api
  addlogin(val:any,){
    return this.http.post(this.APIUrl+'/creataccount',val)
  }
 

   //implimentation    la  fonction recherche de c# with api
   rech(val:any){
    return this.http.post(this.APIUrl+'/login',val)
  }

  // implimentation la fonction showserveur de c# with api
  showserver():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/sever')
  }
  showmdxfrc4(val:any){
    return this.http.post(this.APIUrl+'/frc4',val)
  }
  showmdxfrc(val:any){
    return  this.http.post(this.APIUrl+'/frc',val)
  }
  showmdxfrc2(val:any){
    return this.http.post(this.APIUrl+'/frc2',val)
  }
  showmdxfrc3(val:any){
    return this.http.post(this.APIUrl+'/frc3',val)
  }
  showmdxfrc5(val:any){
    return this.http.post(this.APIUrl+'/frc5',val)
  }
  showmdxfrc6(val:any){
    return this.http.post(this.APIUrl+'/frc6',val)
  }
  showmdxfrc7(val:any){
    return this.http.post(this.APIUrl+'/frc7',val)
  }
  showmdxfrc8(val:any){
    return this.http.post(this.APIUrl+'/frc8',val)
  }

  
  showcube():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/cube')
  } 

  showdimention(val:any){
    return this.http.post(this.APIUrl+'/dimention',val)
  }

   showmeasure(val:any){
    return this.http.post(this.APIUrl+'/measure',val)
  }
  
filterweek(val:any){
    return this.http.post(this.APIUrl+'/frcweek',val)
  }
  filterweek2(val:any){
    return this.http.post(this.APIUrl+'/frcweek2',val)
  }
  
filtermonth(val:any){
  return this.http.post(this.APIUrl+'/frcmonth',val)
}
  
filtermonth2(val:any){
  return this.http.post(this.APIUrl+'/frcmonth2',val)
}

filtertrimester(val:any){
  return this.http.post(this.APIUrl+'/frctrimester',val)
}

filtertrimester2(val:any){
  return this.http.post(this.APIUrl+'/frctrimester2',val)
}
filterquater(val:any){
  return this.http.post(this.APIUrl+'/frcquarter',val)
}

filterquater2(val:any){
  return this.http.post(this.APIUrl+'/frcquarter2',val)
}
filteryear(val:any){
    return this.http.post(this.APIUrl+'/frcyears',val)
  }
  filteryear2(val:any){
    return this.http.post(this.APIUrl+'/frcyears2',val)
  }
  filtermeasureweek(val:any){
    return this.http.post(this.APIUrl+'/frcweekmea',val)
  }
  filtermeasureweek2(val:any){
    return this.http.post(this.APIUrl+'/frcweekmea2',val)
  }
  
filtermeasuremonth(val:any){
  return this.http.post(this.APIUrl+'/frcmonthmea',val)
}
filtermeasuremonth2(val:any){
  return this.http.post(this.APIUrl+'/frcmonthmea2',val)
}
filtermeasuretrimester(val:any){
  return this.http.post(this.APIUrl+'/frctrimestermea',val)
}
filtermeasuretrimester2(val:any){
  return this.http.post(this.APIUrl+'/frctrimestermea2',val)
}

filtermeasurequater(val:any){
  return this.http.post(this.APIUrl+'/frcquartermea',val)
}

filtermeasurequater2(val:any){
  return this.http.post(this.APIUrl+'/frcquartermea2',val)
}
filtermeasureyear(val:any){
    return this.http.post(this.APIUrl+'/frcyearsmea',val)
  }
  filtermeasureyear2(val:any){
      return this.http.post(this.APIUrl+'/frcyearsmea2',val)
    }
  filtermeasuredimentionweek(val:any){
    return this.http.post(this.APIUrl+'/frcweekmeadim',val)
  }
  
  filtermeasuredimentionweek2(val:any){
    return this.http.post(this.APIUrl+'/frcweekmeadim2',val)
  }
  
filtermeasuredimentionmonth(val:any){
  return this.http.post(this.APIUrl+'/frcmonthmeadim',val)
}
filtermeasuredimentionmonth2(val:any){
  return this.http.post(this.APIUrl+'/frcmonthmeadim2',val)
}
filtermeasuredimentiontrimester(val:any){
  return this.http.post(this.APIUrl+'/frctrimestermeadim',val)
}

filtermeasuredimentiontrimester2(val:any){
  return this.http.post(this.APIUrl+'/frctrimestermeadim2',val)
}
filtermeasuredimentionquater(val:any){
  return this.http.post(this.APIUrl+'/frcquartermeadim',val)
}

filtermeasuredimentionquater2(val:any){
  return this.http.post(this.APIUrl+'/frcquartermeadim2',val)
}
filtermeasuredimentionyear(val:any){
    return this.http.post(this.APIUrl+'/frcyearsmeadim',val)
  }
  
filtermeasuredimentionyear2(val:any){
  return this.http.post(this.APIUrl+'/frcyearsmeadim2',val)
}
 setloggedin(value:boolean){
   this.loginstat=value

 }
 get isloggedin(){
  
   return this.loginstat
 }

 
  
}
