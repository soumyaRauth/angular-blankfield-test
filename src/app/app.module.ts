import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { warningAlertComponent } from './warning-alert/warning-alert.component';

@NgModule({
  declarations:[
    AppComponent,
    ServerComponent,
    warningAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
