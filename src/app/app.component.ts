import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  userName: string = '';
  createServer:boolean=false;
  serverStatus:string='Offline'
  constructor() {
  this.serverStatus=Math.random() > 0.5 ? 'Online':'Offline';
  }



  createTheServer(){
    this.createServer=true;
  }

  getColor(){
    return this.serverStatus==='Online'?'green':'red';
  }
  

}
