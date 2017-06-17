import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../core/http.service';
import { EmpModel } from './add.model';

@Component(
    {
        selector: 'my-app',
        templateUrl: './addEmployee.html'
    })
export class AddComponent {
    empModel: EmpModel = new EmpModel();
    constructor(private router: Router, private httpService: HttpService) {
    }
    addEmployee() {
        this.httpService.post('/post', this.empModel).subscribe(res => {
            this.router.navigate(['/']);
        }
        );

    }
}
