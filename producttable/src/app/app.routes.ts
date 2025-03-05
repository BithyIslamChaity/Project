import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { HarryPotterComponent } from './harry-potter/harry-potter.component';
import { TeacherComponent } from './teacher/teacher.component';
import { InforComponent } from './infor/infor.component';

export const routes: Routes = [
    { path: 'list', component: ListComponent },
  { path: 'form', component: FormComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'harry-potter', component: HarryPotterComponent },
  {path: 'teacher', component: TeacherComponent},
  {path: 'infor', component:InforComponent},
  { path: '**', redirectTo: '' },
];
