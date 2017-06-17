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
var router_1 = require("@angular/router");
var http_service_1 = require("../core/http.service");
var ListComponent = (function () {
    function ListComponent(router, http) {
        this.router = router;
        this.http = http;
        this.empList = new Array();
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getall();
    };
    ListComponent.prototype.getall = function () {
        var _this = this;
        this.http.get("all").subscribe(function (res) {
            _this.empList = res;
        });
    };
    ListComponent.prototype.add = function () {
        this.router.navigate(['add']);
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './list.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, http_service_1.HttpService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map