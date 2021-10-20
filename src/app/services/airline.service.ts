import {Injectable} from '@angular/core';
import {MainService} from './main.service';
import {IData} from '../interfaces/IData';

@Injectable({
  providedIn: 'root'
})

export class AirlineService extends MainService {
  numberOfKilometers = 1;
  age = 1;
  weightOfLuggage = 1;

  status = 'airline';

  data: IData = {
    economy: {
      priceOfOneKilometer: 4,
      maxWeightOfLuggage: 20,
      priceOfLuggage: this.weightOfLuggage < 5 ? 0 : 4000,
      sale: null
    },
    advanced: {
      priceOfOneKilometer: this.age < 7 ? 8 - ((8 * 30) / 100) : 8,
      maxWeightOfLuggage: 50,
      priceOfLuggage: this.weightOfLuggage < 20 ? 0 : 5000,
      sale: 30
    },
    luxury: {
      priceOfOneKilometer: this.age < 16 ? 15 - ((15 * 30) / 100) : 15,
      maxWeightOfLuggage: 50,
      priceOfLuggage: 0,
      sale: 30
    }
  };

  constructor() {
    super();
  }

}
