import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  
  enteredInitialInvestment = '0';
  enteredAnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  constructor(private InvestmentService: InvestmentService){}

  onSubmit(){
    this.InvestmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment, 
      annualInvestment: +this.enteredAnualInvestment,
      expectedReturn: +this.enteredExpectedReturn, 
      duration: +this.enteredDuration
    });
  }
}
