import { Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    
    { path: 'create', component: CreateuserComponent },
    { path: 'list', component: ListComponent },
    { path: '**', redirectTo: '' }
];