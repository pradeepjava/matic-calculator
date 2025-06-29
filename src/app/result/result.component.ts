import { Component, inject } from '@angular/core';
import { CalculationServiceService } from '../common/calculation-service.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  calculationService=inject(CalculationServiceService);
  annualData=this.calculationService.annualData;

}
