import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './Add/add.component';
import { UpdateComponent } from './Update/update.component';
import { DeleteComponent } from './Delete/delete.component';

const listRoute: Routes = [
    {
        path: '',
        component: ListComponent,
    },
    {
        path: 'add',
        component: AddComponent,
    },
    {
        path: 'edit/:id',
        component:UpdateComponent,
    },
    {
        path: 'delete/:id',
        component: DeleteComponent,
    }
];
export const listRouting = RouterModule.forRoot(listRoute);