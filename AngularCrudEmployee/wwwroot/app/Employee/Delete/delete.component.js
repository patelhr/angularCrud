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
var add_model_1 = require("../add/add.model");
var http_service_1 = require("../core/http.service");
var DeleteComponent = (function () {
    function DeleteComponent(router, activeRouter, http) {
        this.router = router;
        this.activeRouter = activeRouter;
        this.http = http;
        this.empObject = new add_model_1.EmpModel();
    }
    DeleteComponent.prototype.ngOnInit = function () {
        this.deleteEmp();
    };
    DeleteComponent.prototype.deleteEmp = function () {
        var _this = this;
        this.empObject.id = this.activeRouter.snapshot.params['id'];
        this.http.delete('delete/' + this.empObject.id).subscribe(function (res) {
            _this.router.navigate(['/']);
        });
    };
    return DeleteComponent;
}());
DeleteComponent = __decorate([
    core_1.Component({
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, http_service_1.HttpService])
], DeleteComponent);
exports.DeleteComponent = DeleteComponent;
//# sourceMappingURL=delete.component.js.map