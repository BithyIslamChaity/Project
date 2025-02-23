import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    { path: 'list', component: ListComponent },
  { path: 'form', component: FormComponent },
  { path: 'header', component: HeaderComponent },
  { path: '**', redirectTo: '' },
];
