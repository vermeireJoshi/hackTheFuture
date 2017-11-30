import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { City } from '../models/City';
import { Location } from '../models/location';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  private _cities: City[];
  private _locs: Location[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this._locs = new Array<Location>();
    this.apiService.cities.subscribe(e => {
      this._cities = e;
      this._cities.forEach(city => {
        this.apiService.getGeolocation(city.name).subscribe(loc => {
          console.log(loc);
          var newLoc = new Location(loc.lat,loc.lng);
          console.log(newLoc);
          this._locs.push(newLoc);
          console.log(this._locs);
        })
      });
    });
    
  }

  get locs(): Location[]{
    return this._locs;
  }

}
