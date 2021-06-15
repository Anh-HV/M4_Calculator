import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result:string = "";

  constructor() { }
  dis(value:string){
  this.result+=value;
  }
  clr(){
    this.result="";
  }
  total(){
   this.result= eval(this.result);
  }
  ngOnInit(): void {
  }

}
