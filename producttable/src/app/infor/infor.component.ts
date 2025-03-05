import { Component, OnInit } from '@angular/core';
import { InforService } from '../service/infor.service';


@Component({
  selector: 'app-infor',
  imports: [],
  templateUrl: './infor.component.html',
  styleUrl: './infor.component.css'
})
export class InforComponent implements OnInit {
  str: string = '';

  constructor(private inforService: InforService) {}

  ngOnInit() {
    this.inforService.callLocalApi().subscribe(data => {
      console.log(data);
      this.str = data;
    });
  }
}

