import {Injectable, OnInit} from '@angular/core';
import {IData} from '../interfaces/IData';

type TFunc = number | null | undefined;

@Injectable({
  providedIn: 'root'
})
export class MainService {
  status: string = 'airline' || 'railway';
  numberOfKilometers = 1;
  age = 1;
  weightOfLuggage = 1;

  data: IData = {
    economy: {
      priceOfOneKilometer: 4,
      maxWeightOfLuggage: 20,
      priceOfLuggage: this.weightOfLuggage < 5 ? 0 : 4000,
      sale: null
    },
    advanced: {
      priceOfOneKilometer: this.age < 7 ? (4 * 30) / 100 : 8,
      maxWeightOfLuggage: 50,
      priceOfLuggage: this.weightOfLuggage < 20 ? 0 : 5000,
      sale: 30
    },
    luxury: {
      priceOfOneKilometer: this.age < 16 ? (4 * 30) / 100 : 15,
      maxWeightOfLuggage: 50,
      priceOfLuggage: 0,
      sale: 30
    }
  };

  constructor() {
  }

  getEconomyRates(): TFunc {
    if (this.weightOfLuggage > this.data.economy.maxWeightOfLuggage) {
      return null;
    }

    if (this.status === 'airline') {
      this.weightOfLuggage < 5 ? this.data.economy.priceOfLuggage = 0 : this.data.economy.priceOfLuggage = 4000;
    }

    if (this.status === 'railway') {
      this.weightOfLuggage < 15 ?
        this.data.economy.priceOfLuggage = 0 :
        this.data.economy.priceOfLuggage = parseFloat((50 * this.weightOfLuggage).toFixed(2));

      this.age < 5 ? this.data.economy.priceOfOneKilometer = 0.5 - ((0.5 * 10 * 50) / 1000) : this.data.economy.priceOfOneKilometer = 0.5;
    }

    return parseFloat(((this.data.economy.priceOfOneKilometer * this.numberOfKilometers) + this.data.economy.priceOfLuggage).toFixed(2));
  }

  getAdvancedRates(): TFunc {
    if (this.weightOfLuggage > this.data.advanced.maxWeightOfLuggage) {
      return null;
    }

    if (this.status === 'airline') {
      this.weightOfLuggage < 20 ? this.data.advanced.priceOfLuggage = 0 : this.data.advanced.priceOfLuggage = 5000;
      this.age < 7 ? this.data.advanced.priceOfOneKilometer = 8 - ((8 * 30) / 100 ) : this.data.advanced.priceOfOneKilometer = 8;
    }

    if (this.status === 'railway') {
      this.weightOfLuggage < 20 ?
        this.data.economy.priceOfLuggage = 0 :
        this.data.economy.priceOfLuggage = parseFloat((50 * this.weightOfLuggage).toFixed(2));
      this.age < 8 ? this.data.advanced.priceOfOneKilometer = 2 - ((2 * 30) / 100) : this.data.advanced.priceOfOneKilometer = 2;
    }

    return parseFloat(((this.data.advanced.priceOfOneKilometer * this.numberOfKilometers) + this.data.advanced.priceOfLuggage).toFixed(2));
  }

  getLuxuryRates(): TFunc {
    if (this.weightOfLuggage > this.data.luxury.maxWeightOfLuggage) {
      return null;
    }

    if (this.status === 'airline') {
      this.age < 16 ? this.data.luxury.priceOfOneKilometer = 15 - ((15 * 30) / 100) : this.data.luxury.priceOfOneKilometer = 15;
    }

    if (this.status === 'railway') {
      this.age < 16 ? this.data.luxury.priceOfOneKilometer = 4 - ((4 * 20) / 100) : this.data.luxury.priceOfOneKilometer = 4;
    }

    return parseFloat((this.data.luxury.priceOfOneKilometer * this.numberOfKilometers).toFixed(2));
  }

  setValue(age: number, weight: number, quantity: number): void {
    this.numberOfKilometers = quantity;
    this.weightOfLuggage = weight;
    this.age = age;
    this.data.economy.priceOfOneKilometer = this.data.economy.priceOfOneKilometer;
  }
}
