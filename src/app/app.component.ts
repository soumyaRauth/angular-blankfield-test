import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

servers:string[]=['server 1', 'server 2'];
serverName:string='server 3'
display:boolean=false;
  constructor() {
  // this.serverStatus=Math.random() > 0.5 ? 'Online':'Offline';
  }



  addServer(){
    this.servers.push(this.serverName)
  }
  
  removeServer(){
    this.servers.pop();
  }
}
