import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { AuthGuard } from './auth/shared/auth.guard';
import { ChoosedementionandmesureComponent} from './choosedementionandmesure/choosedementionandmesure.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CreaterequetemdxComponent } from './createrequetemdx/createrequetemdx.component';
import { DashbordBarchartComponent } from './dashbord-barchart/dashbord-barchart.component';
import { DashbordLinechartComponent } from './dashbord-linechart/dashbord-linechart.component';
import { DhasbordPiechartComponent } from './dhasbord-piechart/dhasbord-piechart.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { UsecubeComponent } from './usecube/usecube.component';
import { UseserverComponent } from './useserver/useserver.component';



const routes: Routes = [{path:"",component:LoginComponent},
{path:"creataccount",component:CreateaccountComponent},
{path:"useserver",component:UseserverComponent,canActivate:[AuthGuard]},
{path:"usecube",component:UsecubeComponent},

{path:"choosedementionandmesure",component:ChoosedementionandmesureComponent,canActivate:[AuthGuard]},
{path:"createmdx",component:CreaterequetemdxComponent,canActivate:[AuthGuard]},
{path:"table",component:TableComponent,canActivate:[AuthGuard]},
{path:"dhasbord_piechart",component:DhasbordPiechartComponent,canActivate:[AuthGuard]},
{path:"dhasbord_linechart",component:DashbordLinechartComponent,canActivate:[AuthGuard]},
{path:"dhasbord_barchart",component:DashbordBarchartComponent,canActivate:[AuthGuard]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes),NgChartsModule],
  exports: [RouterModule,NgChartsModule]
})
export class AppRoutingModule { }