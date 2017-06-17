import { Component, OnInit } from '@angular/core';
import { EmpModel } from '../Add/add.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../core/http.service';

@Component({
    templateUrl: './update.html'
})
export class UpdateComponent implements OnInit {
    empObject: EmpModel;
    constructor(private router: ActivatedRoute, private http: HttpService, private route: Router) {
        this.empObject = new EmpModel();
    }

    ngOnInit() {
        this.getEmpById();
    }

    getEmpById() {
        this.empObject.id = this.router.snapshot.params['id'];
        this.http.get('getEmp/' + this.empObject.id).subscribe(res => {
            this.empObject = res;
        });
    }

    UpdateEmployee() {
        this.empObject.id = this.router.snapshot.params['id'];
        this.http.put('edit/' + this.empObject.id, this.empObject).subscribe(res => {
            this.route.navigate(['/']);
        });
    }
}