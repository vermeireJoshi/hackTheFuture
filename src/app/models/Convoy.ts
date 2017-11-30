import { Vehicle } from './Vehicle';

export class Convoy {
    id: string;
    desinationCity: string;
    distanceFromCityBorder: number;
    speedInKmPerHour: number;
    vehicles: Vehicle[];

    constructor(id: string, destination: string, distance: number, speed: number, vehicles: Vehicle[]) {
        this.id = id;
        this.desinationCity = destination;
        this.distanceFromCityBorder = distance;
        this.speedInKmPerHour = speed;
        this.vehicles = vehicles;
    }
}
  