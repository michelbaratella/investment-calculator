import { Component } from '@angular/core';
import { UserInputModel } from './user-input.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  userInput: UserInputModel = {
    initialInvestment: '',
    expectedReturn: '',
    annualInvestment: '',
    duration: '',
  };
}
