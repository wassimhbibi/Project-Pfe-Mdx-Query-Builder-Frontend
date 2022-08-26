import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { UseserverComponent } from './useserver/useserver.component';
import { UsecubeComponent } from './usecube/usecube.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChoosedementionandmesureComponent } from './choosedementionandmesure/choosedementionandmesure.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreaterequetemdxComponent } from './createrequetemdx/createrequetemdx.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { TableComponent } from './table/table.component';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth/shared/auth.guard';
import { NgxCaptchaModule } from 'ngx-captcha';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DhasbordPiechartComponent } from './dhasbord-piechart/dhasbord-piechart.component';
import { DashbordBarchartComponent } from './dashbord-barchart/dashbord-barchart.component';
import { DashbordLinechartComponent } from './dashbord-linechart/dashbord-linechart.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    CreateaccountComponent,
    UseserverComponent,
    UsecubeComponent,
    ChoosedementionandmesureComponent,
    CreaterequetemdxComponent,
    TableComponent,
    DhasbordPiechartComponent,
    DashbordBarchartComponent,
    DashbordLinechartComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxCaptchaModule,
    NgMultiSelectDropDownModule.forRoot(),
  
    
    
    
    

 

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
