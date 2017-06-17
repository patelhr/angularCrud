import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
const appRoute: Routes = [
    {
        path: '',
        redirectTo: '/employee',
        pathMatch:'full'
    }
];
export const appRouting = RouterModule.forRoot(appRoute);