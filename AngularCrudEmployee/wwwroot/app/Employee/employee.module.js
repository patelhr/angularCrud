"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var employee_component_1 = require("./employee.component");
var employee_routing_1 = require("./employee.routing");
var list_component_1 = require("./list/list.component");
var add_component_1 = require("./Add/add.component");
var http_service_1 = require("./core/http.service");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var update_component_1 = require("./Update/update.component");
var delete_component_1 = require("./Delete/delete.component");
var EmployeeModule = (function () {
    function EmployeeModule() {
    }
    return EmployeeModule;
}());
EmployeeModule = __decorate([
    core_1.NgModule({
        imports: [
            employee_routing_1.listRouting,
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule
        ],
        declarations: [
            employee_component_1.EmployeeComponent,
            list_component_1.ListComponent,
            add_component_1.AddComponent,
            update_component_1.UpdateComponent,
            delete_component_1.DeleteComponent
        ],
        providers: [
            http_service_1.HttpService,
            http_1.HttpModule
        ]
    })
], EmployeeModule);
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employee.module.js.map