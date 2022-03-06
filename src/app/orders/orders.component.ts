import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders = [
    {
      id: 1,
      name: 'Juan Perez',
      phone: '9931458745',
      detail: 'Pastel de chocolate',
      mail: 'juan.perez@gmail.com'
    },
    {
      id: 2,
      name: 'Samuel Lopez',
      phone: '6654785441',
      detail: 'Vela de 7 años.',
      mail: 'samuel.lopez@gmail.com'
    },
    {
      id: 3,
      name: 'Laura Martinez',
      phone: '5568745844',
      detail: 'Pastel napolitano',
      mail: 'laura.martinez@gmail.com'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
