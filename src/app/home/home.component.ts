import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items = [
    {
      img: 'https://s1.eestatic.com/2015/03/03/cocinillas/cocinillas_15258554_115891984_605x610.jpg',
      name: 'Pastel Planeta',
      description: '',
      button: 'Ordenalo'
    },
    {
      img: 'https://static4.todobonito.com/m/2016/12/2028e9f20ff6a774b3881d5a96ea370a.jpg',
      name: 'Pastel Galaxia',
      description: '',
      button: 'Ordenalo'
    },
    {
      img: 'https://pbs.twimg.com/media/DhotX0DUcAElFAu.jpg',
      name: 'Dona Universo',
      description: '',
      button: 'Ordenala'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
