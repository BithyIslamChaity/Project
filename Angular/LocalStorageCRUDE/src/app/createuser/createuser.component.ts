import { Component, OnInit } from '@angular/core';
import {User} from '../app.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-createuser',
  imports: [FormsModule],
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.css'
})
export class CreateuserComponent implements OnInit{
u: any;
  constructor() {}
  ngOnInit():void{
     console.log('CreateUserComponent');
    console.error('dummy error');
  
    localStorage.setItem('name','john');
    localStorage.setItem('age','22');
    localStorage.setItem('email','bgmail.com');
    localStorage.setItem('name','john');
  }
  onSubmit(){
    let users = JSON.parse(localStorage.getItem('user') || '[]');
    users.push(this.u);
    localStorage.setItem('user', JSON.stringify(users));
   
    this.u = new User('', 0, '', '');
    alert('User added successfully');
  }
}

