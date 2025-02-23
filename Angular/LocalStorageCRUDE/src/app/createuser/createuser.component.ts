import { Component, OnInit } from '@angular/core';
import {User} from '../app.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createuser',
  imports: [FormsModule],
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.css'
})
 export class CreateuserComponent {
u: User = new User('', 0, '', '');
isUpdate = false;
  router: any;

constructor(router: Router) {
  const nav = router.getCurrentNavigation();
  if (nav?.extras.state && nav.extras.state['user']) {
    this.u = nav.extras.state['user'];
    this.isUpdate = true;
  } 
}
onSubmit() {
  let users: User[] = JSON.parse(localStorage.getItem('user') || '[]');
  if (this.isUpdate) {
    users = users.map(user => (user.email === this.u.email ? this.u : user));
  } else {
    users.push(this.u);
  }
  localStorage.setItem('user', JSON.stringify(users));
  this.u = new User('', 0, '', '');
  // alert('User added successfully');
  this.router.navigate(['/list']);
 }
}
//  implements OnInit
// u: User = new User('', 0, '', '');
//   constructor() {}
//   ngOnInit():void{
//      console.log('CreateUserComponent');
//     console.error('dummy error');
  
//     localStorage.setItem('name','john');
//     localStorage.setItem('age','22');
//     localStorage.setItem('email','bgmail.com');
//     localStorage.setItem('name','john');
//   }
//   onSubmit(){
//     let users = JSON.parse(localStorage.getItem('user') || '[]');
//     users.push(this.u);
//     localStorage.setItem('user', JSON.stringify(users));
   
//     this.u = new User('', 0, '', '');
//     alert('User added successfully');
//   }
// }

