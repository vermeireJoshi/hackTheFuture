import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { City } from '../models/City';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  private _cities: City[];

  constructor(private apiService: ApiService) {
    this.apiService.cities.subscribe(items => {
      this._cities = items;
    });
   }

  ngOnInit() {
  }

  get cities(): City[]{
    return this._cities;
  }

}
