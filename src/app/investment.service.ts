import { Injectable, signal } from '@angular/core';
import type { InvestmentInput, InvestmentResults } from '../investment.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  constructor() {}

  resultsData = signal<InvestmentResults[] | undefined>(undefined);

  calculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, duration, expectedReturn, annualInvestment } =
      data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultsData.set(annualData);
  }
}
