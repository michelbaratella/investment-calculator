import { Component } from '@angular/core';
import { InvestmentResultsService } from '../../investment-results/investment-results.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers: [InvestmentResultsService],
})
export class TableComponent {
  constructor(private investmentService: InvestmentResultsService) {}

  get tableHeaders() {
    return this.investmentService.getHeaders();
  }
}
