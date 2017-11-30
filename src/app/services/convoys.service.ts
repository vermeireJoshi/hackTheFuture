import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Convoy } from '../models/Convoy';
import { Vehicle } from '../models/Vehicle';
import { Nomad } from '../models/Nomad';

@Injectable()
export class ConvoysService {

  private _url = "http://cunning-convoys.azurewebsites.net/api/convoys";

  constructor(private http: Http) { }

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
