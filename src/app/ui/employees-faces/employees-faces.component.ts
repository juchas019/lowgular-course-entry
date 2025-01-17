import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import { EmployeeService} from "../../services/employee.service";
import {EmployeeModel} from "../../model/employee.model";

@Component({
  selector: 'app-employees-faces',
  templateUrl: './employees-faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesFacesComponent {
  data$: Observable<EmployeeModel[] | null> = this._employeeService.getAll();
  constructor(private _employeeService: EmployeeService) {  }
}
