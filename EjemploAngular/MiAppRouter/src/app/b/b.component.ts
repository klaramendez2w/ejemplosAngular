import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../models/Pedidos';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {
  pedidos:Pedidos[]=null;

  constructor() { }

  ngOnInit() {
    this.pedidos=[
      new Pedidos(1,'Pedido 1', 233),
      new Pedidos(2,'Pedido 2', 335),
      new Pedidos(3,'Pedido 3', 435),
      new Pedidos(4,'Pedido 4', 534),
    ]
  }

}
