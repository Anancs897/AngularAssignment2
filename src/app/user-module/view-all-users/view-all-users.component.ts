import { Component } from '@angular/core';
import { SaveFormDataService } from 'src/app/services/save-form-data.service';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent {

myUserData:{
name:string,mobile:number,email:string,gender:string,category:string,ccheck:boolean,cpluscheck:boolean,javacheck:boolean,pythoncheck:boolean,jscheck:boolean,userurl:any
}[]=[];
constructor(private saveDataService:SaveFormDataService){
  this.myUserData=this.saveDataService.myarr;
  console.log(this.myUserData);
}
}
