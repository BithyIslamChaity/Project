import { Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';

export const routes: Routes = [
    {path: 'Add-doctor', component:AddDoctorComponent},
    { path: '**', redirectTo: '' },
];
