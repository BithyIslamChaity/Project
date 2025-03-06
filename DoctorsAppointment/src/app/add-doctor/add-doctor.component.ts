import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Doctor } from '../app.component'; // Adjusted for doctor model
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-doctor',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css'
})
export class AddDoctorComponent {
  d: Doctor = new Doctor(0, '', '', new Date(), '', ''); // Adjusted for doctor model
  isUpdate = false;
  doctorForm: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['doctors']) {
      this.d = nav.extras.state['doctors'];  
      this.isUpdate = true;
    }
  }

  ngOnInit(): void {
    console.log(this.d);
  }

  onSubmit() {
    let doctors: Doctor[] = JSON.parse(localStorage.getItem('doctors') || '[]');
    if (this.isUpdate) {
      // Update the existing doctor based on the ID (or any unique identifier)
      doctors = doctors.map((doctor) => (doctor.id === this.d.id ? this.d : doctor));
    } else {
      // Add new doctor to the list
      doctors.push(this.d);
    }

    // Save the updated doctor data to localStorage
    localStorage.setItem('doctors', JSON.stringify(doctors));

    // Reset the form object to clear the form after submit
    this.d = new Doctor(0, '', '', new Date(), '', '');

    // Navigate to the doctor list page
    this.router.navigate(['/doctor-list']);
  }
}
