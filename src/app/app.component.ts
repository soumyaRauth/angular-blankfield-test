import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

clickValue:Date[]=[];
display:boolean=false;
  constructor() {

  }



  toggleAction(){
    this.display=!this.display;
    this.clickValue.push(new Date())
  }



}
