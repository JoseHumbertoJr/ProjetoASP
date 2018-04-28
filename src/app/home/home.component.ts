import { Component, OnInit } from '@angular/core';
import { GeralService } from '../geral.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : GeralService) {


   }

  ngOnInit() {
  }

}
