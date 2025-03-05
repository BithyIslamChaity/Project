import { Component } from '@angular/core';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  // Array to hold user data
  users: any[] = [];

  constructor() {
    // Load users from localStorage if available
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers); // Parse the JSON string to array
    }
  }

  // Method to add a new user (doctor)
  addUser(newUser: any) {
    this.users.push(newUser);
    this.saveUsersToLocalStorage();
  }

  // Method to delete a user
  deleteUser(userId: any) {
    this.users = this.users.filter(user => user.id !== userId); // Filter out the user by id
    this.saveUsersToLocalStorage();
  }

  // Method to edit a user
  editUser(updatedUser: any) {
    const userIndex = this.users.findIndex(user => user.id === updatedUser.id);
    if (userIndex !== -1) {
      this.users[userIndex] = updatedUser; // Update user in the array
      this.saveUsersToLocalStorage();
    }
  }

  // Save the users array to localStorage
  private saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.users)); // Stringify array and store it
  }
}
