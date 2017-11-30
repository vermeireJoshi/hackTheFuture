import { Vehicle } from './Vehicle';

export class Convoy {
    id: string;
    destinationCity: string;
    distanceFromCityBorder: number;
    speedInKmPerHour: number;
    vehicles: Vehicle[];

    constructor(id: string, destination: string, distance: number, speed: number, vehicles: Vehicle[]) {
        this.id = id;
        this.destinationCity = destination;
        this.distanceFromCityBorder = distance;
        this.speedInKmPerHour = speed;
        this.vehicles = vehicles;
    }

    caclArriving(): number {
        return this.distanceFromCityBorder / this.speedInKmPerHour;
    }
}
  