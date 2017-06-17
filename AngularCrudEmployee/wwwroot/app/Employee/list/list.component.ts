import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../core/http.service';
import { EmpModel } from '../Add/add.model';

@Component({
    selector: 'my-app',
    templateUrl: './list.html',
})
export class ListComponent implements OnInit {
    empList: Array<EmpModel>;
    constructor(private router: Router, private http: HttpService) {
        this.empList = new Array<EmpModel>();
    }

    ngOnInit() {
        this.getall();
    }

    getall() {
        this.http.get("all").subscribe(res => {
            this.empList = res;
        });
    }
    add() {
        this.router.navigate(['add']);
    }
}