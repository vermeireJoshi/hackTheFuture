import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApiService } from './services/api.service';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from'./not-found/not-found.component';

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
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
