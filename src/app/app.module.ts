import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CitiesService } from './services/cities.service';
import { NavigationComponent } from './navigation/navigation.component';
import { ConvoysService } from './services/convoys.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    CitiesService,
    ConvoysService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
