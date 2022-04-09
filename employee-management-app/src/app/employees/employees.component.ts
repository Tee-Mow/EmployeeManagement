import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { EmployeeModalComponent } from '../employee-modal/employee-modal.component';

import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  modalRef: MdbModalRef<EmployeeModalComponent> | null = null;
  constructor(private employeeService: EmployeeService, private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  add(employee: string): void {
    employee = "";
    if (!employee) { return; }
    this.employeeService.addEmployee({} as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }

  delete(employee: Employee): void {
    this.employees = this.employees.filter(h => h !== employee);
    this.employeeService.deleteEmployee(employee.employeeId).subscribe();
  }
  openModal() {
    this.modalRef = this.modalService.open(EmployeeModalComponent)
  }
}
