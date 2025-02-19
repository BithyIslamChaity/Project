import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  onSubmit() {
    throw new Error('Method not implemented.');
  }

  users: User[] = [];



  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user') || '[]');
    this.users = user;
  }

  constructor(private router: Router) { }

  editUser(user: User) {
    this.router.navigate(['/create'], { state: { user } });
  }

  deleteUser(user: User) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.users = this.users.filter(u => u !== user);
      localStorage.setItem('user', JSON.stringify(this.users));
    }
  }
}
