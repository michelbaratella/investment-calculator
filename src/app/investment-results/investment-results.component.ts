import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private service = inject(InvestmentService);
  // constructor(public service: InvestmentService) {}

  // This get would also work for signals
  // get results() {
  //   return this.service.resultsData;
  // }

  results = computed(() => this.service.resultsData());

  // Third option to consume the signal
  // results = () => this.service.resultsData.asReadonly();
}
