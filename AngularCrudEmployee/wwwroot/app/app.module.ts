import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { EmployeeModule } from './Employee/employee.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        appRouting,
        EmployeeModule,
        FormsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
