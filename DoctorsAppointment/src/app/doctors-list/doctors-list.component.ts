
  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';

  
  @Component({
    selector: 'app-doctors-list',
    templateUrl: './doctors-list.component.html',
    styleUrls: ['./doctors-list.component.css']
  })
  export class DoctorsListComponent implements OnInit {
    doctorsList: Doctor[] = [];
doctorForm: any;
  
    constructor(private router: Router) { }
  
    ngOnInit(): void {
      // Retrieve doctors from localStorage with the correct key
      let doctors = JSON.parse(localStorage.getItem('doctors') || '[]');
      this.doctorsList = doctors;
    }
  
    editDoctor(doctor: Doctor): void {
      // Send the selected doctor as state to navigate to the form for updating
      this.router.navigate(['/doctor-form'], { state: { doctors: doctor } });
    }
  
    deleteDoctor(doctorToDelete: Doctor): void {
      if (confirm('Are you sure you want to delete this doctor?')) {
        // Remove the doctor from the doctorsList array by filtering out the doctor
        this.doctorsList = this.doctorsList.filter(doctor => doctor !== doctorToDelete);
  
        // Update localStorage with the new list of doctors
        localStorage.setItem('doctors', JSON.stringify(this.doctorsList));
  
        alert('Doctor deleted successfully');
      }
    }
  }
  
export class Doctor {
  constructor(
    public id: number,
    public name: string,
    public specialty: string,
    public hireDate: Date,
    public phone: string,
    public email: string
  ) {}
}
