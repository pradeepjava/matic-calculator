import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculationServiceService } from '../common/calculation-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userinput',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './userinput.component.html',
  styleUrl: './userinput.component.css',
})
export class UserinputComponent {
  initialInvestment = '0';
  actualInvestment = '0';
  expectedReturn = '0';
  duration = '0';
  calculationService = inject(CalculationServiceService);
  isPopulateError = false;

  calculateIt() {
    this.calculationService.calculateInvestmentResults(
      +this.initialInvestment,
      +this.actualInvestment,
      +this.expectedReturn,
      +this.duration
    );
    this.resetIt();
  }
  resetIt() {
    this.initialInvestment = '0';
    this.actualInvestment = '0';
    this.expectedReturn = '0';
    this.duration = '0';
  }
}
