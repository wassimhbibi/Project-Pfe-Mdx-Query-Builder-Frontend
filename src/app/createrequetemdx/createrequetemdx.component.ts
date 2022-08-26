
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../sharedservice.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-createrequetemdx',
  templateUrl: './createrequetemdx.component.html',
  styleUrls: ['./createrequetemdx.component.css']
})
export class CreaterequetemdxComponent implements OnInit {
  @Input() log: any;
  loginform: any;
  selectmeasurerows: any;
  selectdimentioncolumns: any;
  selectdimentionrows: any;
  selectmeasurecolumns: any;
  selectmeasurefilter: any;
  selectdimentionfilter: any;
  condition: any;
  data: any;
  data2: any;
  display:any;
  data0:any;
  constructor(private service: SharedService, private router: Router, private route: ActivatedRoute ,) {

    this.data = this.router.getCurrentNavigation()?.extras.state,
      this.data2 = this.router.getCurrentNavigation()?.extras.state
     console.log(this.data)
     console.log(this.data2)
  }
  selected_Option_filter_measure: any;
  printed_Option_filter_measure: any;
  selected_Option_rows_measure: any;
  printed_Option_rows_measure: any;
  selected_Option_columns_measure: any;
  printed_Option_columns_measure: any;
  selected_Option_filter_dimention: any;
  printed_Option_filter_dimention: any;
  selected_Option_rows_dimention: any;
  printed_Option_rows_dimention: any;
  selected_Option_columns_dimention: any;
  printed_Option_columns_dimention: any;


  print_on_filter_with_measure() {
    this.printed_Option_filter_measure = this.selected_Option_filter_measure;
    console.log("My input: ", this.selected_Option_filter_measure);
  }
  print_on_rows_with_measure() {
    this.printed_Option_rows_measure = this.selected_Option_rows_measure;
    console.log("My input: ", this.selected_Option_rows_measure);
  }
  print_on_columns_with_measure() {
    this.printed_Option_columns_measure = this.selected_Option_columns_measure;
    console.log("My input: ", this.selected_Option_columns_measure);
  }
  print_on_filter_with_dimention() {
    this.printed_Option_filter_dimention = this.selected_Option_filter_dimention;
    console.log("My input: ", this.selected_Option_filter_dimention);
  }
  print_on_rows_with_dimention() {
    this.printed_Option_rows_dimention = this.selected_Option_rows_dimention;
    console.log("My input: ", this.selected_Option_rows_dimention);
  }
  print_on_columns_with_dimention() {
    this.printed_Option_columns_dimention = this.selected_Option_columns_dimention;
    console.log("My input: ", this.selected_Option_columns_dimention);
  }
  submitData() {
    console.log(this.loginform.value);



  }


 


  f() {
    console.log(this.loginform.value);
  }
  //   //fuction de cree la requete
  createmdx() {
    if (this.selectdimentionrows != null && this.selectdimentioncolumns != null && this.selectmeasurerows != null && this.selectmeasurecolumns != null) {
      var val6 = {

        selectdimentioncolumns: this.selectdimentioncolumns,
        selectmeasurerows: this.selectmeasurerows,
        selectdimentionrows: this.selectdimentionrows

      }

      this.service.showmdxfrc3(val6).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                  
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

    }

    else if (this.selectmeasurerows == null && this.selectmeasurecolumns == null && this.selectdimentionrows == null && this.selectdimentioncolumns != null) {
      var val2 = {

        selectdimentioncolumns: this.selectdimentioncolumns
      }

      this.service.showmdxfrc7(val2).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                  
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])
 

        });

      });

    }
    else if (this.selectmeasurerows == null && this.selectmeasurecolumns == null && this.selectdimentioncolumns != null && this.selectdimentionrows != null) {
      var val3 = {

        selectdimentioncolumns: this.selectdimentioncolumns,
        selectdimentionrows: this.selectdimentionrows
      }

      this.service.showmdxfrc6(val3).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

    }

    else if (this.selectdimentioncolumns == null && this.selectmeasurerows == null && this.selectdimentionrows != null && this.selectmeasurecolumns != null) {
      var val7 = {
        selectdimentionrows: this.selectdimentionrows,
        selectmeasurecolumns: this.selectmeasurecolumns

      }

      this.service.showmdxfrc2(val7).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
 var      row = "<tr>";
   var row2="<tr>";
          for (var j = 0; j < (Object.keys(element)).length; j++) {
         row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
          row2+="<td>"+ element[Object.keys(element)[j]] +
          "</td>";
            }
          row += "</tr>";
          row2 += "</tr>";
          $("#table").append(row,row2);

          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

    }
    else if (this.selectmeasurerows == null && this.selectdimentioncolumns != null && this.selectdimentionrows != null && this.selectmeasurecolumns != null) {
      var val5 = {

        selectdimentioncolumns: this.selectdimentioncolumns,
        selectdimentionrows: this.selectdimentionrows,
        selectmeasurecolumns: this.selectmeasurecolumns

      }

      this.service.showmdxfrc4(val5).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

    }
    else if
      (this.selectdimentionrows == null && this.selectdimentionrows == null && this.selectmeasurerows == null) {
      var val = {
        selectmeasurecolumns: this.selectmeasurecolumns
      }

      this.service.showmdxfrc8(val).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

    }
    else {
      var val8 = {

        selectdimentioncolumns: this.selectdimentioncolumns,
        selectmeasurerows: this.selectmeasurerows

      }

      this.service.showmdxfrc(val8).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
   var      row1 = "<tr>"+"<tr>";
   var row2="<tr>";
          for (var j = 0; j < (Object.keys(element)).length; j++) {
         row1 += "<td>"+
         [Object.keys(element)[j]] + "</td>" ;
          row2+="<td>"+ element[Object.keys(element)[j]] +
          "</td>";
            }
          row1 += "</tr>";
          row2 += "</tr>";
          $("#table").append(row1,row2);



          
          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

    }
  }
  week() {
    if (this.selectmeasurerows == null &&this.selectdimentionrows == null&& this.selectmeasurecolumns == null && this.selectmeasurefilter != null && this.selectdimentioncolumns != null && this.condition != null) {
      var val8 = {

        selectmeasurefilter: this.selectmeasurefilter,
        selectdimentioncolumns: this.selectdimentioncolumns,
        condition: this.condition

      }

      this.service.filterweek(val8).subscribe(res => {

        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        console.log(this.data0);
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])
        });
      });

    }
   else if (this.selectmeasurerows == null && this.selectmeasurecolumns == null && this.selectmeasurefilter != null && this.selectdimentioncolumns == null && this.condition != null&&this.selectdimentionrows != null) {
      var val9 = {

        selectmeasurefilter: this.selectmeasurefilter,
        selectdimentionrows: this.selectdimentionrows,
        condition: this.condition

      }

      this.service.filterweek2(val9).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])
        });
      });

    }

    else if (this.selectmeasurerows == null && this.selectmeasurecolumns != null && this.selectmeasurefilter != null && this.selectdimentioncolumns == null && this.condition != null) {
      var val10 = {

        selectmeasurefilter: this.selectmeasurefilter,
        selectmeasurecolumns: this.selectmeasurecolumns,
        condition: this.condition

      }

      this.service.filtermeasureweek(val10).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

    }
    else if (this.selectmeasurerows != null && this.selectmeasurecolumns == null && this.selectmeasurefilter != null && this.selectdimentioncolumns == null && this.condition != null) {
      var val11 = {

        selectmeasurefilter: this.selectmeasurefilter,
        selectmeasurerows: this.selectmeasurerows,
        condition: this.condition

      }

      this.service.filtermeasureweek2(val11).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

    }
    else if( this.selectdimentioncolumns==null&&this.selectmeasurecolumns==null&& this.selectmeasurefilter!=null&&this.selectdimentionrows!=null&&this.selectmeasurerows!=null&&this.condition
!=null){
      var val13 = {

        selectdimentionrows: this.selectdimentionrows,
        selectmeasurerows: this.selectmeasurerows,
        selectmeasurefilter: this.selectmeasurefilter,
        condition: this.condition

      }

      this.service.filtermeasuredimentionweek2(val13).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

    }
    else  {
            var val14 = {
      
              selectdimentioncolumns: this.selectdimentioncolumns,
              selectmeasurecolumns: this.selectmeasurecolumns,
              selectmeasurefilter: this.selectmeasurefilter,
              condition: this.condition
      
            }
      
            this.service.filtermeasuredimentionweek(val14).subscribe(res => {
              this.data0 = res;
              //@ts-ignore
        this.service.SAVEME = res;
              this.data0.forEach((element: any) => {
                element
                var      row = "<tr>";
                var row2="<tr>";
                       for (var j = 0; j < (Object.keys(element)).length; j++) {
                      row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                       row2+="<td>"+ element[Object.keys(element)[j]] +
                       "</td>";
                         }
                       row += "</tr>";
                       row2 += "</tr>";
                       $("#table").append(row,row2);
                console.log(element)
                console.log(element[Object.keys(element)[0]])
      
              });
      
            });
      
          }
        }
  
  
  month() {
    if  (this.selectmeasurerows == null && this.selectmeasurecolumns == null && this.selectmeasurefilter != null && this.selectdimentioncolumns != null && this.condition != null) {
      var val8 = {

        selectmeasurefilter: this.selectmeasurefilter,
        selectdimentioncolumns: this.selectdimentioncolumns,
        condition: this.condition

      }

      this.service.filtermonth(val8).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])
        });
      });

    }
   else if (this.selectmeasurerows == null && this.selectmeasurecolumns == null && this.selectmeasurefilter != null && this.selectdimentioncolumns == null && this.condition != null&&this.selectdimentionrows != null) {
      var val9 = {

        selectmeasurefilter: this.selectmeasurefilter,
        selectdimentionrows: this.selectdimentionrows,
        condition: this.condition

      }

      this.service.filtermonth2(val9).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])
        });
      });

    }

    else if (this.selectmeasurerows == null && this.selectmeasurecolumns != null && this.selectmeasurefilter != null && this.selectdimentioncolumns == null && this.condition != null) {
      var val10 = {

        selectmeasurefilter: this.selectmeasurefilter,
        selectmeasurecolumns: this.selectmeasurecolumns,
        condition: this.condition

      }

      this.service.filtermeasuremonth(val10).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

    }
    else if (this.selectmeasurerows != null && this.selectmeasurecolumns == null && this.selectmeasurefilter != null && this.selectdimentioncolumns == null && this.condition != null) {
      var val11 = {

        selectmeasurefilter: this.selectmeasurefilter,
        selectmeasurerows: this.selectmeasurerows,
        condition: this.condition

      }

      this.service.filtermeasuremonth2(val11).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

    }
    else if( this.selectdimentioncolumns==null&&this.selectmeasurecolumns==null&& this.selectmeasurefilter!=null&&this.selectdimentionrows!=null&&this.selectmeasurerows!=null&&this.condition
!=null){
      var val13 = {

        selectdimentionrows: this.selectdimentionrows,
        selectmeasurerows: this.selectmeasurerows,
        selectmeasurefilter: this.selectmeasurefilter,
        condition: this.condition

      }

      this.service.filtermeasuredimentionmonth2(val13).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

    }
    else  {
            var val14 = {
      
              selectdimentioncolumns: this.selectdimentioncolumns,
              selectmeasurecolumns: this.selectmeasurecolumns,
              selectmeasurefilter: this.selectmeasurefilter,
              condition: this.condition
      
            }
      
            this.service.filtermeasuredimentionmonth(val14).subscribe(res => {
              this.data0 = res;
              //@ts-ignore
        this.service.SAVEME = res;
              this.data0.forEach((element: any) => {
                element
                var      row = "<tr>";
                var row2="<tr>";
                       for (var j = 0; j < (Object.keys(element)).length; j++) {
                      row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                       row2+="<td>"+ element[Object.keys(element)[j]] +
                       "</td>";
                         }
                       row += "</tr>";
                       row2 += "</tr>";
                       $("#table").append(row,row2);
                console.log(element)
                console.log(element[Object.keys(element)[0]])
      
              });
      
            });
      
          }
        }
  trimester() {
    if  (this.selectmeasurerows == null && this.selectmeasurecolumns == null && this.selectmeasurefilter != null && this.selectdimentioncolumns != null && this.condition != null) {
      var val8 = {

        selectmeasurefilter: this.selectmeasurefilter,
        selectdimentioncolumns: this.selectdimentioncolumns,
        condition: this.condition

      }

      this.service.filtertrimester(val8).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])
        });
      });

    }
   else if (this.selectmeasurerows == null && this.selectmeasurecolumns == null && this.selectmeasurefilter != null && this.selectdimentioncolumns == null && this.condition != null&&this.selectdimentionrows != null) {
      var val9 = {

        selectmeasurefilter: this.selectmeasurefilter,
        selectdimentionrows: this.selectdimentionrows,
        condition: this.condition

      }

      this.service.filtertrimester2(val9).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])
        });
      });

    }

    else if (this.selectmeasurerows == null && this.selectmeasurecolumns != null && this.selectmeasurefilter != null && this.selectdimentioncolumns == null && this.condition != null) {
      var val10 = {

        selectmeasurefilter: this.selectmeasurefilter,
        selectmeasurecolumns: this.selectmeasurecolumns,
        condition: this.condition

      }

      this.service.filtermeasuretrimester(val10).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

    }
    else if (this.selectmeasurerows != null && this.selectmeasurecolumns == null && this.selectmeasurefilter != null && this.selectdimentioncolumns == null && this.condition != null) {
      var val11 = {

        selectmeasurefilter: this.selectmeasurefilter,
        selectmeasurerows: this.selectmeasurerows,
        condition: this.condition

      }

      this.service.filtermeasuretrimester2(val11).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

    }
    else if( this.selectdimentioncolumns==null&&this.selectmeasurecolumns==null&& this.selectmeasurefilter!=null&&this.selectdimentionrows!=null&&this.selectmeasurerows!=null&&this.condition
!=null){
      var val13 = {

        selectdimentionrows: this.selectdimentionrows,
        selectmeasurerows: this.selectmeasurerows,
        selectmeasurefilter: this.selectmeasurefilter,
        condition: this.condition

      }

      this.service.filtermeasuredimentiontrimester2(val13).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

    }
    else  {
            var val14 = {
      
              selectdimentioncolumns: this.selectdimentioncolumns,
              selectmeasurecolumns: this.selectmeasurecolumns,
              selectmeasurefilter: this.selectmeasurefilter,
              condition: this.condition
      
            }
      
            this.service.filtermeasuredimentiontrimester(val14).subscribe(res => {
              this.data0 = res;
              //@ts-ignore
              this.service.SAVEME = res;
              this.data0.forEach((element: any) => {
                element
                var      row = "<tr>";
                var row2="<tr>";
                       for (var j = 0; j < (Object.keys(element)).length; j++) {
                      row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                       row2+="<td>"+ element[Object.keys(element)[j]] +
                       "</td>";
                         }
                       row += "</tr>";
                       row2 += "</tr>";
                       $("#table").append(row,row2);
                console.log(element)
                console.log(element[Object.keys(element)[0]])
      
              });
      
            });
      
          }
        }
  quarter() {
    if  (this.selectmeasurerows == null && this.selectmeasurecolumns == null && this.selectmeasurefilter != null && this.selectdimentioncolumns != null && this.condition != null) {
      var val8 = {

        selectmeasurefilter: this.selectmeasurefilter,
        selectdimentioncolumns: this.selectdimentioncolumns,
        condition: this.condition

      }

      this.service.filterquater(val8).subscribe(res => {
        this.data0 = res;
            //@ts-ignore
            this.service.SAVEME = res;  
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])
        });
      });

    }
   else if (this.selectmeasurerows == null && this.selectmeasurecolumns == null && this.selectmeasurefilter != null && this.selectdimentioncolumns == null && this.condition != null&&this.selectdimentionrows != null) {
      var val9 = {

        selectmeasurefilter: this.selectmeasurefilter,
        selectdimentionrows: this.selectdimentionrows,
        condition: this.condition

      }

      this.service.filterquater2(val9).subscribe(res => {
        this.data0 = res;
              //@ts-ignore
              this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])
        });
      });

    }

    else if (this.selectmeasurerows == null && this.selectmeasurecolumns != null && this.selectmeasurefilter != null && this.selectdimentioncolumns == null && this.condition != null) {
      var val10 = {

        selectmeasurefilter: this.selectmeasurefilter,
        selectmeasurecolumns: this.selectmeasurecolumns,
        condition: this.condition

      }

      this.service.filtermeasurequater(val10).subscribe(res => {
        this.data0 = res;
              //@ts-ignore
        this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

    }
    else if (this.selectmeasurerows != null && this.selectmeasurecolumns == null && this.selectmeasurefilter != null && this.selectdimentioncolumns == null && this.condition != null) {
      var val11 = {

        selectmeasurefilter: this.selectmeasurefilter,
        selectmeasurerows: this.selectmeasurerows,
        condition: this.condition

      }

      this.service.filtermeasurequater2(val11).subscribe(res => {
        this.data0 = res;
              //@ts-ignore
              this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

    }
    else if( this.selectdimentioncolumns==null&&this.selectmeasurecolumns==null&& this.selectmeasurefilter!=null&&this.selectdimentionrows!=null&&this.selectmeasurerows!=null&&this.condition
!=null){
      var val13 = {

        selectdimentionrows: this.selectdimentionrows,
        selectmeasurerows: this.selectmeasurerows,
        selectmeasurefilter: this.selectmeasurefilter,
        condition: this.condition

      }

      this.service.filtermeasuredimentionquater2(val13).subscribe(res => {
        this.data0 = res;
              //@ts-ignore
              this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

    }
    else  {
            var val14 = {
      
              selectdimentioncolumns: this.selectdimentioncolumns,
              selectmeasurecolumns: this.selectmeasurecolumns,
              selectmeasurefilter: this.selectmeasurefilter,
              condition: this.condition
      
            }
      
            this.service.filtermeasuredimentionquater(val14).subscribe(res => {
              this.data0 = res;
                    //@ts-ignore
                    this.service.SAVEME = res;
              this.data0.forEach((element: any) => {
                element
                var      row = "<tr>";
                var row2="<tr>";
                       for (var j = 0; j < (Object.keys(element)).length; j++) {
                      row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                       row2+="<td>"+ element[Object.keys(element)[j]] +
                       "</td>";
                         }
                       row += "</tr>";
                       row2 += "</tr>";
                       $("#table").append(row,row2);
                console.log(element)
                console.log(element[Object.keys(element)[0]])
      
              });
      
            });
      
          }
        }
  year() {
    if (this.selectmeasurerows == null && this.selectmeasurecolumns == null && this.selectmeasurefilter != null && this.selectdimentioncolumns != null && this.condition != null) {
      var val8 = {

        selectmeasurefilter: this.selectmeasurefilter,
        selectdimentioncolumns: this.selectdimentioncolumns,
        condition: this.condition

      }

      this.service.filteryear(val8).subscribe(res => {
        this.data0 = res;
        //@ts-ignore
        this.service.SAVEME = res;
        
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
        
          console.log([Object.keys(element)])
        });
      });

    }
   else if (this.selectmeasurerows == null && this.selectmeasurecolumns == null && this.selectmeasurefilter != null && this.selectdimentioncolumns == null && this.condition != null&&this.selectdimentionrows != null) {
      var val9 = {

        selectmeasurefilter: this.selectmeasurefilter,
        selectdimentionrows: this.selectdimentionrows,
        condition: this.condition

      }

      this.service.filteryear2(val9).subscribe(res => {
        this.data0 = res;
              //@ts-ignore
              this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])
        });
      });

    }

    else if (this.selectmeasurerows == null && this.selectmeasurecolumns != null && this.selectmeasurefilter != null && this.selectdimentioncolumns == null && this.condition != null) {
      var val10 = {

        selectmeasurefilter: this.selectmeasurefilter,
        selectmeasurecolumns: this.selectmeasurecolumns,
        condition: this.condition

      }

      this.service.filtermeasureyear(val10).subscribe(res => {
        this.data0 = res;
              //@ts-ignore
              this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

    }
    else if (this.selectmeasurerows != null && this.selectmeasurecolumns == null && this.selectmeasurefilter != null && this.selectdimentioncolumns == null && this.condition != null) {
      var val11 = {

        selectmeasurefilter: this.selectmeasurefilter,
        selectmeasurerows: this.selectmeasurerows,
        condition: this.condition

      }

      this.service.filtermeasureyear2(val11).subscribe(res => {
        this.data0 = res;
              //@ts-ignore
              this.service.SAVEME = res;
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

    }
    else if( this.selectdimentioncolumns==null&&this.selectmeasurecolumns==null&& this.selectmeasurefilter!=null&&this.selectdimentionrows!=null&&this.selectmeasurerows!=null&&this.condition
      !=null){
      var val13 = {

        selectdimentionrows: this.selectdimentionrows,
        selectmeasurerows: this.selectmeasurerows,
        selectmeasurefilter: this.selectmeasurefilter,
        condition: this.condition

      }

      this.service.filtermeasuredimentionyear2(val13).subscribe(res => {
        this.data0 = res;
              //@ts-ignore
              this.service.SAVEME = res;  
        this.data0.forEach((element: any) => {
          element
          var      row = "<tr>";
          var row2="<tr>";
                 for (var j = 0; j < (Object.keys(element)).length; j++) {
                row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                 row2+="<td>"+ element[Object.keys(element)[j]] +
                 "</td>";
                   }
                 row += "</tr>";
                 row2 += "</tr>";
                 $("#table").append(row,row2);
          console.log(element)
          console.log(element[Object.keys(element)[0]])

        });

      });

}
    else{  
            var val14 = {
      
              selectdimentioncolumns: this.selectdimentioncolumns,
              selectmeasurecolumns: this.selectmeasurecolumns,
              selectmeasurefilter: this.selectmeasurefilter,
              condition: this.condition
      
            }
      
            this.service.filtermeasuredimentionyear(val14).subscribe(res => {
              this.data0 = res;
                    //@ts-ignore
                    this.service.SAVEME = res;
              this.data0.forEach((element: any) => {
                element
                var      row = "<tr>";
                var row2="<tr>";
                       for (var j = 0; j < (Object.keys(element)).length; j++) {
                      row += "<td>"+[Object.keys(element)[j]] + "</td>" ;
                       row2+="<td>"+ element[Object.keys(element)[j]] +
                       "</td>";
                         }
                       row += "</tr>";
                       row2 += "</tr>";
                       $("#table").append(row,row2);
                console.log(element)
                console.log(element[Object.keys(element)[0]])
      
              });
      
            });
      
          }
        }       
  ngOnInit(): void {

    this.data = history.state.name_measure
    this.data2 = history.state.name_dimention
    

    this.loginform = new FormGroup({


      "selectdimentionrows": new FormControl(),

      "selectdimentioncolumns": new FormControl(),
      "selectmeasurerows": new FormControl(),
      "selectmeasurecolumns": new FormControl(),
      "selectmeasurefilter": new FormControl(),
      "selectdimentionfilter": new FormControl(),
      "condition": new FormControl()


    })


    this.selectmeasurerows = this.log.selectmeasurerows;
    this.selectmeasurecolumns = this.log.selectmeasurecolumns;
    this.selectdimentionrows = this.log.selectdimentionrows;
    this.selectdimentioncolumns = this.log.selectdimentionrows;
    this.selectdimentionfilter = this.log.selectdimentionfilter;
    this.selectmeasurefilter = this.log.selectmeasurefilter;
    this.condition = this.log.condition;

  }

  get selectdimentionncolumns() { return this.loginform.get('selectdimentioncolumns'); }
  get selectdimentionnrows() { return this.loginform.get('selectdimentionrows'); }
  get selectmeasureecolumns() { return this.loginform.get('selectmeasurecolumns'); }
  get selectmeasureerows() { return this.loginform.get('selectmeasurerows'); }
  get selectmeasureefilter() { return this.loginform.get('selectmeasurefilter'); }
  get selectdimentionnfilter() { return this.loginform.get('selectdimentionfilter'); }
  get conditionn() { return this.loginform.get('condition'); }

  openModal(){
    this.display="block"
  }
  onClosedandled(){
    this.display="none"
  }
}
