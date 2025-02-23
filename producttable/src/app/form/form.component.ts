import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Manager } from '../app.component';
import { Router } from '@angular/router';
import { ButtonComponent } from "./button/button.component";

@Component({
  selector: 'app-form',
  imports: [FormsModule, CommonModule, ButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  u: Manager = new Manager(0, '', 0, 0, new Date(), new Date(), '', ''); 
  isUpdate = false;
productForm: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['managers']) {
      this.u = nav.extras.state['managers'];  
      this.isUpdate = true;
    }
  }

  ngOnInit(): void {
   
    console.log(this.u);
  }

  onSubmit() {
    let manager: Manager[] = JSON.parse(localStorage.getItem('manager') || '[]');
    if (this.isUpdate) {
      // Update the existing user based on serial number
      manager = manager.map((manager) => (manager.sNumber === this.u.sNumber ? this.u : manager));
    } else {
      // Add new user to the list
      manager.push(this.u);
    }

    // Save the updated user data to localStorage
    localStorage.setItem('managers', JSON.stringify(manager));

    // Reset the form object to clear the form after submit
    this.u = new Manager(0, '', 0, 0, new Date(), new Date(), '', '');

    
    this.router.navigate(['/list']);
  }
}