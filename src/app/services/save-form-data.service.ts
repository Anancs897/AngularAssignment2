import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SaveFormDataService {

  constructor() { }

  userurl:any
  formData:any
  
  myarr:{
    name:string,email:string,mobile:number,gender:string,category:string,ccheck:boolean,cpluscheck:boolean,javacheck:boolean,pythoncheck:boolean,jscheck:boolean,userurl:any
  }[]=[];

  
  saveUserData(data:any){
    data.userurl=this.userurl;
    this.myarr.push(data);
    // console.log(this.myarr);
    console.warn(this.myarr)
  };
}
