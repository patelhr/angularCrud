import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from './employee.component';
import { listRouting } from './employee.routing';
import { ListComponent } from './list/list.component';
import { AddComponent } from './Add/add.component';
import { HttpService } from './core/http.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './Update/update.component';
import { DeleteComponent } from './Delete/delete.component';

@NgModule({
    imports: [
        listRouting,
        BrowserModule,
        HttpModule,
        FormsModule
        ],
    declarations: [
        EmployeeComponent,
        ListComponent,
        AddComponent,
        UpdateComponent,
        DeleteComponent
    ],
    providers: [
        HttpService,
        HttpModule
    ]
})
export class EmployeeModule { }
