import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-modal',
  templateUrl: './employee-modal.component.html',
})
export class EmployeeModalComponent {
  employee: Employee = {
    birthDate: new Date(),
    employedDate: new Date(),
    employeeNum: "",
    firstName: "",
    lastName: "",
    personId: 0,
    employeeId: 0
  };
  constructor(private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private location: Location, public modalRef: MdbModalRef<EmployeeModalComponent>) {

  }

  ngOnInit(): void {
  }

  getEmployee(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.employeeService.getEmployee(id)
      .subscribe(employee => this.employee = employee);
  }

  goToHome(): void {
    this.router.navigateByUrl('/employees');
    this.modalRef.close();
  }

  save(): void {
    if (this.employee) {
      this.employeeService.addEmployee(this.employee)
        .subscribe(() => this.goToHome());
    }
  }
}