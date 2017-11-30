import { Nomad } from './Nomad';

export class Vehicle {
    id: string;
    licensePlate: string;
    numberOfNomads: number;
    nomads: Nomad[];

    constructor(id: string, license: string, number: number, nomads: Nomad[]) {
        this.id = id;
        this.licensePlate = license;
        this.numberOfNomads = number;
        this.nomads = nomads;
    }
}