import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  cakes = [
    {
      img: 'https://d1nsq2txwd94q7.cloudfront.net/public/files/production/recipes/images/4922/fancy/r_4922_1550828876.jpg',
      name: 'Chocolate',
      description: '',
      price: 70
    },
    {
      img: 'https://www.pasteleriasquemen.com/wp-content/uploads/2019/11/durazno-3l-rebanada.jpg',
      name: 'Vainilla',
      description: '',
      price: 50
    },
    {
      img: 'https://www.pasteleriasquemen.com/wp-content/uploads/2019/11/tenta-fres-rebanada-247x296.jpg',
      name: 'Fresa',
      description: '',
      price: 60
    },
  ];

  ornaments = [
    {
      img: 'https://st.depositphotos.com/1020804/2157/i/600/depositphotos_21579613-stock-photo-strawberries-with-leaves.jpg',
      name: 'Fresas',
      description: '',
      price: 10
    },
    {
      img: 'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00068063613650L.jpg',
      name: 'Vela',
      description: '',
      price: 5
    },
    {
      img: 'https://us.123rf.com/450wm/viktarmalyshchyts/viktarmalyshchyts1112/viktarmalyshchyts111200072/11701896-duraznos.jpg?ver=6',
      name: 'Duraznos',
      description: '',
      price: 15
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
