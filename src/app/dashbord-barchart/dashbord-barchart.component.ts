import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { SharedService } from '../sharedservice.service';

@Component({
  selector: 'app-dashbord-barchart',
  templateUrl: './dashbord-barchart.component.html',
  styleUrls: ['./dashbord-barchart.component.css']
})
export class DashbordBarchartComponent implements OnInit {

  datah:any;
   // @ts-ignore
  public barChartData: ChartConfiguration['data'];

   
  constructor(private router:Router ,private service: SharedService) { 


  
  
   }

  ngOnInit(): void {


    let dataToShow:(number  | null)[] = []
    let labelToShow:(string  | null)[] = []
  
    this.datah = this.service.SAVEME;

 

  let newArray = this.datah.map( (obj:any,index:number)=> {

    dataToShow = this.createbarChartData(obj);
    labelToShow = this.createlabelbarChartData(obj);

     return( {
      data: [ ...dataToShow ],label:`${index === 0 ? 'row1' : index === 1 ? 'row2' : index ===2  ? 'row3'
      :index === 3 ? 'row4' :index === 4 ? 'row5' :index === 5? 'row6' :index === 6 ? 'row7' :index === 7 ? 'row8' :index === 8 ? 'row9' :index === 9 ? 'row10' :index === 10 ? 'row11' :index === 11 ? 'row12' :index === 12 ? 'row13' :index === 13 ? 'row14' :index === 14 ? 'row15':index === 15 ? 'row16':index === 16 ? 'row17':index === 17 ? 'row18':index === 18 ? 'row19':"row20"}`
  
    }  )

    } )

    this.barChartData= {
      labels: [ ...labelToShow ],
      datasets: [
       ...newArray
      
    
      ]
    };

   
   // this.datah = this.router.getCurrentNavigation()?.extras.state
    
  }

 


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
   
  };

  public barChartType: ChartType = 'bar';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  
  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
  


  createbarChartData(obj: any) {

    let keys = Object.keys(obj)
    let dataToShow:number[] = []
   keys.forEach(key=>{dataToShow.push(obj[key])})
    return dataToShow;
  }
  createlabelbarChartData(obj: any) {

    let keys = Object.keys(obj)
    let dataToShow:string[] = []
    for(let i = 0; i < keys.length; i++ ) {
        dataToShow.push( keys[i] )
    }
    return dataToShow;
  }
}
