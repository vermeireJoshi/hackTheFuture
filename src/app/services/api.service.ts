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
  
    constructor(private http: Http) { }
  
    get cities(): Observable<City[]> {
      return this.http.get(this._url + "/cities").map(response =>
        response.json().map(item => new City(item.id, item.name, item.population, item.area, item.country)
        )
      )
    }
    
    get convoys(): Observable<Convoy[]> {
      return this.http.get(this._url).map(response =>
         response.json().map(item => new Convoy(item.id, item.destinationCity, item.distanceFromCityBorder, item.speedInKmPerHour,
            item.vehicles.map(veh => new Vehicle(veh.id, veh.licensePlate, veh.numberOfNomads, 
              veh.nomads.map(nom => new Nomad(nom.firstName, nom.lastName))
        ))
       )
      ))
    }

}
