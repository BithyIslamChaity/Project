import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  //templateUrl: './app.component.html',

  template:`
  <!-- @if (mark >=80){
<div>get =A+</div>
  }@else if (mark >=70){
    <div>get =A</div>
  }@else if (mark >=60){
    <div>get =A-</div>
  }@else if (mark >=50){
    <div>get =B</div>
  }@else {
    <div>get =F</div> }-->
    <table>
      <thead>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
        <th>Country</th>
        <th>ProfilePicture</th>

      </thead>
      <tbody>
        @for(user of users; track  user.Name){
          <tr>
            <td>{{user.Name}}</td>
            <td>{{user.Age}}</td>
            <td>{{user.City}}</td>
            <td>{{user.Country}}</td>
            <td><img src="{{user.ProfilePicture}}" alt="img" width="100" height="100"></td>
          </tr>
        }
      </tbody>
    </table>
  `,
  styles: `
  :host {
    color: blue;
  }
`,
   styleUrl: './app.component.css'
})
export class AppComponent {
 
  
 

users = [
  {
Name:'Bab',
Age:33,
City:'Shylet',
Country:'Bangladesh',
ProfilePicture:'https://robohash.org/mail@ashallendesign.co.uk',
},
{
Name:'Jar',
Age:33,
City:'Silvia',
Country:'Newziland',
ProfilePicture:'https://dummyimage.com/300.png/09f/fff&text=Ash+Allen',
},
{
  Name:'Nan',
  Age:33,
  City:'Jam',
  Country:'Done',
  ProfilePicture:'https://placebear.com/250/250',
  },
];
}
