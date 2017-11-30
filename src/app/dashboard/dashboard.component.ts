import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { City } from '../models/City';
import { Observable } from 'rxjs/Observable';
import { Convoy } from '../models/Convoy';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private cities: City[];
  private convoys: Convoy[];
  private cityConvoys: City[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.cities.subscribe(item =>
      this.cities = item
    );

    this.apiService.convoys.subscribe(item =>
      this.convoys = item
    );

    this.apiService.citiesConvoys.subscribe(item =>
      this.cityConvoys = item
    );
  }
}
