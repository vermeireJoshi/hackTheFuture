import { Component, OnInit, Input } from '@angular/core';
import { City } from '../models/City';

@Component({
  selector: 'app-city-view',
  templateUrl: './city-view.component.html',
  styleUrls: ['./city-view.component.css']
})
export class CityViewComponent implements OnInit {
  private _savedCities: any;

  @Input() public city: City;

  constructor() {
   }

  ngOnInit() {
  }

  follow(){
    console.log("follow");
    console.log(this.city);
    this._savedCities = (localStorage.getItem("cities") != null)?JSON.parse(localStorage.getItem("cities")): new Array<City>();
    console.log(this._savedCities);
    this._savedCities.push(this.city);
    localStorage.setItem("cities", JSON.stringify(this._savedCities));
  }

}
