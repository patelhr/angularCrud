"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var add_model_1 = require("../Add/add.model");
var router_1 = require("@angular/router");
var http_service_1 = require("../core/http.service");
var UpdateComponent = (function () {
    function UpdateComponent(router, http, route) {
        this.router = router;
        this.http = http;
        this.route = route;
        this.empObject = new add_model_1.EmpModel();
    }
    UpdateComponent.prototype.ngOnInit = function () {
        this.getEmpById();
    };
    UpdateComponent.prototype.getEmpById = function () {
        var _this = this;
        this.empObject.id = this.router.snapshot.params['id'];
        this.http.get('getEmp/' + this.empObject.id).subscribe(function (res) {
            _this.empObject = res;
        });
    };
    UpdateComponent.prototype.UpdateEmployee = function () {
        var _this = this;
        this.empObject.id = this.router.snapshot.params['id'];
        this.http.put('edit/' + this.empObject.id, this.empObject).subscribe(function (res) {
            _this.route.navigate(['/']);
        });
    };
    return UpdateComponent;
}());
UpdateComponent = __decorate([
    core_1.Component({
        templateUrl: './update.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, http_service_1.HttpService, router_1.Router])
], UpdateComponent);
exports.UpdateComponent = UpdateComponent;
//# sourceMappingURL=update.component.js.map