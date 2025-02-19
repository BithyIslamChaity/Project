import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
//import { CommonModule } from '@angular/common';
//import { CreateuserComponent } from './createuser/createuser.component';
@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LocalStorageCRUDE';
} 
export class User {
  name: string;
  age: number;
  email: string;
  address: string;

  constructor(name: string, age: number, email: string, address: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.address = address;
  }
}
