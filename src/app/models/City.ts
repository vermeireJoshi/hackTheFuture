import { Convoy } from './Convoy';

export class City {
    id: string;
    name: string;
    population: string;
    area: number;
    country: string;
    convoys: Convoy[];

    constructor(id: string, name: string, population: string, area: number, country: string) {
        this.id = id;
        this.name = name;
        this.population = population;
        this.area = area;
        this.country = country;
    }

    calcDensitie(): number {
        return +this.population / this.area;
    }
}
  