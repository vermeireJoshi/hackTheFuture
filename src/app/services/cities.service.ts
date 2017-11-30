import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { City } from '../models/City';
import 'rxjs/add/operator/map';

@Injectable()
export class CitiesService {

  private _url = 'http://cunning-convoys.azurewebsites.net/api/cities';

  constructor(private http: Http) { }

  get cities(): Observable<City[]> {
    return this.http.get(this._url + "/cities").map(response =>
      response.json().map(item => new City(item.id, item.name, item.population, item.area, item.country)
      )
    )
  }
}