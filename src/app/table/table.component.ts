import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';
import * as $ from 'jquery';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  display: any;
  constructor(private router:Router,private spinner: NgxSpinnerService){
   
  }
  
  ngOnInit() {
    /** spinner starts on init */
 
    this.spinner.show();
    //this.data1=history.state.data_table
    
    

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

//console.log(this.data1)
  
    
    
    }
    
   
  }
 


 
