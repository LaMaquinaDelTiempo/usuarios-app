import { Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

export const routes: Routes = [{ path: '', redirectTo: '/Create', pathMatch: 'full' },
    {path:'Create', component: CreateUserComponent },
    {path:'Read', component: ListUserComponent },
    {path:'Update', component: EditUserComponent },
    {path:'Delete', component: DeleteUserComponent },
];
