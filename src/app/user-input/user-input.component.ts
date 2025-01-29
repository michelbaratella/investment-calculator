import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../../investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<InvestmentInput>();

  initialInvestment = signal('0');
  expectedReturn = signal('0');
  annualInvestment = signal('0');
  duration = signal('0');

  onSubmit() {
    this.calculate.emit({
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
