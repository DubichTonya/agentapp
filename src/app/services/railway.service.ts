import { Injectable } from '@angular/core';
import {MainService} from './main.service';
import {IData} from '../interfaces/IData';


@Injectable({
  providedIn: 'root'
})
export class RailwayService extends MainService{

  status = 'railway';

  data: IData = {
    economy: {
      priceOfOneKilometer: this.age < 5 ? 0.5 - ((0.5 * 10 * 50) / 1000) : 0.5,
      maxWeightOfLuggage: 50,
      priceOfLuggage: this.weightOfLuggage < 15 ? 0 : parseFloat((50 * this.weightOfLuggage).toFixed(2)),
      sale: 50
    },
    advanced: {
      priceOfOneKilometer: this.age < 8 ? 2 - ((2 * 30) / 100) : 2,
      maxWeightOfLuggage: 60,
      priceOfLuggage: this.weightOfLuggage < 20 ? 0 : parseFloat((50 * this.weightOfLuggage).toFixed(2)),
      sale: 30
    },
    luxury: {
      priceOfOneKilometer: this.age < 16 ? 4 - ((4 * 20) / 100) : 4,
      maxWeightOfLuggage: 60,
      priceOfLuggage: 0,
      sale: 20
    }
  };

  constructor() {
    super();
  }


}
