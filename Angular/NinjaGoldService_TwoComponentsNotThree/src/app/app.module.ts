import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoldService } from './gold.service';


import { AppComponent } from './app.component';
import { FarmCaveCasHouseComponent } from './farm-cave-cas-house/farm-cave-cas-house.component';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    AppComponent,
    FarmCaveCasHouseComponent,
    LogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ GoldService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
