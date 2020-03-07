import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  userName: string = '';
  colorSet:boolean=false;
  setColorButtonText:string='Set Color'
  serverStatus:string='Offline'
  constructor() {
  this.serverStatus=Math.random() > 0.5 ? 'Online':'Offline';
  }



  setTheColor(){
    if(this.colorSet==false){
      this.setColorButtonText='Unset Color'
      this.colorSet=true;
    }else{
      this.colorSet=false;
      this.setColorButtonText='Set Color'
    }
  }

  getColor(){
    return this.serverStatus==='Online'?'green':'red';
  }
  

}
