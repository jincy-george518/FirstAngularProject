import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.css']
})
export class MyappComponent implements OnInit {

  customerlist: Customer[] = [];
  custid : any;
  custname: string ='';
  location: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }
  
  clear(): void{
    this.custid = '';
    this.custname = '';
    this.location =  '';
    
  }
  register(frm: any): any{
    
    this.custid = frm.custid;
    this.custname = frm.custname;
    this.location =  frm.location;
    
    const newcustomer: Customer = new Customer(this.custid,this.custname,this.location);
    this.customerlist.push(newcustomer);
    this.clear();
    
}
}