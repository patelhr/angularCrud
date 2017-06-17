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
var add_model_1 = require("./add.model");
var AddComponent = (function () {
    function AddComponent(router, httpService) {
        this.router = router;
        this.httpService = httpService;
        this.empModel = new add_model_1.EmpModel();
    }
    AddComponent.prototype.addEmployee = function () {
        var _this = this;
        this.httpService.post('/post', this.empModel).subscribe(function (res) {
            _this.router.navigate(['/']);
        });
    };
    return AddComponent;
}());
AddComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './addEmployee.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, http_service_1.HttpService])
], AddComponent);
exports.AddComponent = AddComponent;
//# sourceMappingURL=add.component.js.map