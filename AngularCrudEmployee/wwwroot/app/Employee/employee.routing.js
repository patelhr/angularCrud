"use strict";
var router_1 = require("@angular/router");
var list_component_1 = require("./list/list.component");
var add_component_1 = require("./Add/add.component");
var update_component_1 = require("./Update/update.component");
var delete_component_1 = require("./Delete/delete.component");
var listRoute = [
    {
        path: '',
        component: list_component_1.ListComponent,
    },
    {
        path: 'add',
        component: add_component_1.AddComponent,
    },
    {
        path: 'edit/:id',
        component: update_component_1.UpdateComponent,
    },
    {
        path: 'delete/:id',
        component: delete_component_1.DeleteComponent,
    }
];
exports.listRouting = router_1.RouterModule.forRoot(listRoute);
//# sourceMappingURL=employee.routing.js.map