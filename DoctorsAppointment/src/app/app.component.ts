import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DoctorsAppointment';
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
  

