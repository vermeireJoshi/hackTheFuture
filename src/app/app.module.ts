import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApiService } from './services/api.service';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from'./not-found/not-found.component';
import { ConvoysComponent } from './convoys/convoys.component';
import { CitiesComponent } from './cities/cities.component';
import { CityViewComponent } from './city-view/city-view.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    NotFoundComponent,
    ConvoysComponent,
    CitiesComponent,
    CityViewComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: "convoys", component: ConvoysComponent},
      {path: "dashboard", component:DashboardComponent},
      {path: "cities", component:CitiesComponent},
      {path: "map", component:MapComponent},
      {path: "**", component:NotFoundComponent}
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZtZzucDFcL0Dr4nUPslssN7Kp0PjhBzo'
    })
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
