import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { City } from '../models/City';
import { Convoy } from '../models/Convoy';
import { Vehicle } from '../models/Vehicle';
import { Nomad } from '../models/Nomad';

@Injectable()
export class ApiService {

  private _url = 'http://cunning-convoys.azurewebsites.net/api';
  private apiKey = 'AIzaSyAsJ9cLXK6MESDxu4SJRbWr446C--x34MQ';
  
    constructor(private http: Http) { }
  
    get cities(): Observable<City[]> {
      return this.http.get(this._url + "/cities").map(response =>
        response.json().map(item => new City(item.id, item.name, item.population, item.area, item.country)
        )
      )
    }
    
    get convoys(): Observable<Convoy[]> {
      return this.http.get(this._url + "/convoys").map(response =>
         response.json().map(item => new Convoy(item.id, item.destinationCity, item.distanceFromCityBorder, item.speedInKmPerHour,
            item.vehicles.map(veh => new Vehicle(veh.id, veh.licensePlate, veh.numberOfNomads, 
              veh.nomads.map(nom => new Nomad(nom.firstName, nom.lastName))
        ))
       )
      ))
    }
    
    get citiesConvoys(): Observable<City[]> {
      var cities;
      var convoys;
      this.cities.subscribe(item => {
        cities = item;
        this.convoys.subscribe(item => {
          convoys = item;
          return cities.array.forEach(element => {
            element.convoys = convoys.filter(c => c.destinationCity == element.name);
          });
        });
      });
      return undefined;
    }

    getGeolocation(city: string): any {
      return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + city + ",+CA&key=AIzaSyAsJ9cLXK6MESDxu4SJRbWr446C--x34MQ")
        .map(response => response.json().results[0].geometry.location);
    }
}
