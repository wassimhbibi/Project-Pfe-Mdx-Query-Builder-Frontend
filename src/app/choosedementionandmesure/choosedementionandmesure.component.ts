import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SharedService} from 'src/app/sharedservice.service';

@Component({
  selector: 'app-choosedementionandmesure',
  templateUrl: './choosedementionandmesure.component.html',
  styleUrls: ['./choosedementionandmesure.component.css']
})

export class ChoosedementionandmesureComponent implements OnInit {
  data:any;
  constructor(private service:SharedService,private router:Router , private route:ActivatedRoute) { 
    this.data = this.router.getCurrentNavigation()?.extras.state
    //@ts-ignore
    //this.service.SAVEME = this.router.getCurrentNavigation()?.extras.state


  }
 
  
  dropdownListdimention :any;
  dropdownSettingsdimention = {};
  datadimention = [{}];
dropdownListmeasure :any;
selected_Items_measure=[{item_id:0, item_text:""}]
selected_Items_dimention=[{item_id:0, item_text:""}]
  dropdownSettingsmeasure = {};
  datameasure = [{}];
ngOnInit() : void {
  this.data=history.state.cube
  var val={
    cube_name:this.data
  }
 
 //  function  show measure
 this.service.showmeasure(val).subscribe((res:any)=>{
  for(var i = 0; i<res.length; i++ ){
    this.datameasure.push({
      item_id: i,
      item_text:res[i].measure_unique_name
    })
  }
  this.dropdownListmeasure = this.datameasure;
  
  });
 
  this.dropdownSettingsmeasure={
  singleSelection: false,
  idField: 'item_id',
  textField: 'item_text',
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  itemsShowLimit: 6,
  allowSearchFilter: true
};
   
 //  function  show dimension
 
  this.data=history.state.cube
var val={
  cube_name:this.data}

 this.service.showdimention(val).subscribe((res:any)=>{
  for(var j = 0; j<res.length; j++ ){
    this.datadimention.push({
      item_id: j,
      item_text:res[j].hierarchy_UNIQUE_NAME
    })
  }
  this.dropdownListdimention = this.datadimention;
  });
  this.selected_Items_measure = [
    
    
  ];
  this.selected_Items_dimention = [
    
    
  ];

this.dropdownSettingsdimention= {
  singleSelection: false,
  idField: 'item_id',
  textField: 'item_text',
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  itemsShowLimit: 6,
  allowSearchFilter: true
};
    




}

on_Item_Select_measure(item: any) {
  console.log(item);
  this.selected_Items_measure.push(item);
}
on_Select_All_measure(items: any) {
  console.log(items);
  this.selected_Items_measure = items;
}
on_Item_De_Select_measure(item: any) {
  console.log(item);
  for (var i = 0; i< this.selected_Items_measure.length; i++ ){
    if (this.selected_Items_measure[i].item_id == item.item_id){
      this.selected_Items_measure.splice(i,1);
      break;
    }
  }
}
on_De_Select_All_measure(items: any) {
  this.selected_Items_measure = items;
}
on_Item_Select_dimention(item: any) {
  console.log(item);
  this.selected_Items_dimention.push(item);
}
on_Select_All_dimention(items: any) {
  console.log(items);
  this.selected_Items_dimention = items;
}
on_Item_De_Select_dimention(item: any) {
  console.log(item);
  for (var i = 0; i< this.selected_Items_dimention.length; i++ ){
    if (this.selected_Items_dimention[i].item_id == item.item_id){
      this.selected_Items_dimention.splice(i,1);
      break;
    }
  }
}
on_De_Select_All_dimention(items: any) {
  this.selected_Items_dimention = items;
}




}