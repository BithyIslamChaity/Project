import { Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';

export const routes: Routes = [
    {path: 'add-doctor', component:AddDoctorComponent},
    { path: '**', redirectTo: '' },
    {path:'home', component:AddDoctorComponent},
    {path:'doctors-list', component:DoctorsListComponent},
    {path:'patient', component:PatientComponent} 
];
