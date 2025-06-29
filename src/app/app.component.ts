import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserinputComponent } from './userinput/userinput.component';
import { CalculationServiceService } from './common/calculation-service.service';
import { ResultComponent } from "./result/result.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserinputComponent, ResultComponent],
})
export class AppComponent {
  calculationService=inject(CalculationServiceService);
    annualData=this.calculationService.annualData;
}
