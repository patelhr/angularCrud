import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpModel } from '../add/add.model';
import { HttpService } from '../core/http.service';

@Component({
    template:''
})
export class DeleteComponent implements OnInit {
    empObject: EmpModel;
    constructor(private router: Router, private activeRouter: ActivatedRoute, private http: HttpService) {
        this.empObject = new EmpModel();
    }

    ngOnInit() {
        this.deleteEmp();
    }
    deleteEmp() {
        this.empObject.id = this.activeRouter.snapshot.params['id'];
        this.http.delete('delete/' + this.empObject.id).subscribe(res => {
            this.router.navigate(['/']);
        });
    }
}