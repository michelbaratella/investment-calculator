import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = signal('0');
  expectedReturn = signal('0');
  annualInvestment = signal('0');
  duration = signal('0');

  constructor(private service: InvestmentService) {}

  onSubmit() {
    this.service.calculateInvestmentResults({
      annualInvestment: +this.annualInvestment(),
      duration: +this.duration(),
      expectedReturn: +this.expectedReturn(),
      initialInvestment: +this.initialInvestment(),
    });

    this.initialInvestment.set('0');
    this.expectedReturn.set('0');
    this.annualInvestment.set('0');
    this.duration.set('0');
  }
}
