import {Component, OnInit} from '@angular/core';
import {AirlineService} from './services/airline.service';
import {RailwayService} from './services/railway.service';

interface IRates {
  economy: null | number | undefined;
  advanced: null | number | undefined;
  luxury: null | number | undefined;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formForCalculation = {
    quantity: '',
    age: '',
    weight: ''
  };

  rates: {
    airline: IRates,
    railway: IRates;
  };

  airlineService: AirlineService;
  railwayService: RailwayService;

  constructor(airlineService: AirlineService, railwayService: RailwayService) {
    this.airlineService = airlineService;
    this.railwayService = railwayService;

    this.rates = {
      airline: {
        economy: null,
        advanced: null,
        luxury: null
      },
      railway: {
        economy: null,
        advanced: null,
        luxury: null
      },
    };
  }

  calculate(): void {
    const age = +this.formForCalculation.age;
    const weight = +this.formForCalculation.weight;
    const quantity = +this.formForCalculation.quantity;

    this.airlineService.setValue(age, weight, quantity);
    this.railwayService.setValue(age, weight, quantity);

    this.rates.airline.economy = this.airlineService.getEconomyRates();
    this.rates.railway.economy = this.railwayService.getEconomyRates();
    this.rates.airline.advanced = this.airlineService.getAdvancedRates();
    this.rates.railway.advanced = this.railwayService.getAdvancedRates();
    this.rates.airline.luxury = this.airlineService.getLuxuryRates();
    this.rates.railway.luxury = this.railwayService.getLuxuryRates();

  }
}
