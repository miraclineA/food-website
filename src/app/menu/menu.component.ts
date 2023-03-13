import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  cards: any

  constructor(private serv: FoodserviceService) { }
  ngOnInit() {
    this.cards = this.serv.getOrder()
  }
}
