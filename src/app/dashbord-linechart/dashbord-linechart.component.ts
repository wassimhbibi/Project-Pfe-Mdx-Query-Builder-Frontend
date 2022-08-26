
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { SharedService } from '../sharedservice.service';

@Component({
  selector: 'app-dashbord-linechart',
  templateUrl: './dashbord-linechart.component.html',
  styleUrls: ['./dashbord-linechart.component.css']
})
export class DashbordLinechartComponent implements OnInit {





  // [  {  } ] 
  datah:any;
   // @ts-ignore
  public lineChartData: ChartConfiguration['data'];

   
  constructor(private router:Router ,private service: SharedService) { 


  
  
   }

  ngOnInit(): void {
   

    let dataToShow:(number  | null)[] = []
    let labelToShow:(string  | null)[] = []
  
    this.datah = this.service.SAVEME;


   


  let newArray = this.datah.map( (obj:any, index:number)=> {

    dataToShow = this.createLineChartData(obj);
    labelToShow = this.createlabelLineChartData(obj);

     return( {
      data: [ ...dataToShow ],
      label: `${index === 0 ? 'row1' : index === 1 ? 'row2' : index ===2  ? 'row3'
       :index === 3 ? 'row4' :index === 4 ? 'row5' :index === 5? 'row6' :index === 6 ? 'row7' :index === 7 ? 'row8' :index === 8 ? 'row9' :index === 9 ? 'row10' :index === 10 ? 'row11' :index === 11 ? 'row12' :index === 12 ? 'row13' :index === 13 ? 'row14' :index === 14 ? 'row15':index === 15 ? 'row16':index === 16 ? 'row17':index === 17 ? 'row18':index === 18 ? 'row19':"row20"}` ,
      borderWidth:3,
      backgroundColor: `${index === 0 ? 'red' : index === 1 ? 'blue' : index ===2  ? 'yellow'
      :index === 3 ? 'green' :index === 4 ? 'gold' :index === 5? 'orange' :index === 6 ? 'pink' :index === 7 ? 'purple' :index === 8 ? 'aqua' :index === 9 ? 'lime' 
      :index === 10 ? 'peach' :index === 11 ? 'maroon' :index === 12 ? 'cyan' :index === 13 ? 'tan':index === 14 ? 'teal':index === 15 ? 'violet':index === 16 ? 'salmon':index === 17 ? 'thistle' :index === 18 ? 'sienna':'black'     }` ,
      borderColor:  `${index === 0 ? 'red' : index === 1 ? 'blue' : index ===2  ? 'yellow'
      :index === 3 ? 'green' :index === 4 ? 'gold' :index === 5? 'orange' :index === 6 ? 'pink' :index === 7 ? 'purple' :index === 8 ? 'aqua' :index === 9 ? 'lime' 
      :index === 10 ? 'peach' :index === 11 ? 'maroon' :index === 12 ? 'cyan' :index === 13 ? 'tan' :index===14?'teal':index === 15 ? 'violet':index === 16 ? 'salmon':index === 17 ? 'thistle' :index === 18 ? 'sienna':'black'}` ,
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'yellow',
      fill: '',
    }  )

    } )

    this.lineChartData= {
      datasets: [
       ...newArray
      ],
      labels: [ ...labelToShow ]
    };

   
   // this.datah = this.router.getCurrentNavigation()?.extras.state
    
  }

 


  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },

  }

  public lineChartType: ChartType = 'line';

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
