import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CitiesService } from './services/cities.service';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from'./not-found/not-found.component';
import { ConvoysService } from './services/convoys.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: "dashboard", component:DashboardComponent},
      {path: "**", component:NotFoundComponent}
    ])
  ],
  providers: [
    CitiesService,
    ConvoysService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
