import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { SharedService } from '../sharedservice.service';

@Component({
  selector: 'app-dhasbord-piechart',
  templateUrl: './dhasbord-piechart.component.html',
  styleUrls: ['./dhasbord-piechart.component.css']
})
export class DhasbordPiechartComponent implements OnInit {
  datah:any;
   // @ts-ignore
  public pieChartData: ChartConfiguration['data'];

   
  constructor(private router:Router ,private service: SharedService) { 


  
  
   }

  ngOnInit(): void {


    let dataToShow:(number  | null)[] = []
    let labelToShow:(string  | null)[] = []
  
    this.datah = this.service.SAVEME;
console.log("========>", this.datah)
 

  let newArray = this.datah.map( (obj:any, index:number)=> {

    dataToShow = this.createLineChartData(obj);
    labelToShow = this.createlabelLineChartData(obj);

     return( {
      data: [ ...dataToShow ],
  
    }  )

    } )

    this.pieChartData= {
      datasets: [
       ...newArray
      ],
      labels: [ ...labelToShow ]

    };

   
   // this.datah = this.router.getCurrentNavigation()?.extras.state
    
  }

 


  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      
          }
        
      
    
  };

  public pieChartType: ChartType = 'pie';

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


  createLineChartData(obj: any) {

    let keys = Object.keys(obj)
    let dataToShow:number[] = []
   keys.forEach(key=>{dataToShow.push(obj[key])})
    return dataToShow;
  }
  createlabelLineChartData(obj: any) {

    let keys = Object.keys(obj)
    let dataToShow:string[] = []
    for(let i = 0; i < keys.length; i++ ) {
        dataToShow.push( keys[i] )
    }
    return dataToShow;
  }
}
