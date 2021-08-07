import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss']
})
export class MyHomeComponent implements OnInit {

  navLink: any = [
    {
      id: 'dashboard',
      name: 'Điều khiển thông minh',
      path: '/dashboard',
      active: false,      
      img: 'assets/images/home/iot.png'
    },
    {
      id: 'home',
      name: 'Cúng sao',
      path: '/home',
      active: false,
      img: 'assets/images/home/lotus.png'
    },
    {
      id: 'covid',
      name: 'Thông tin Covid',
      path: '/covid',
      active: false,
      img: 'assets/images/home/coronavirus.png'
    },
    {
      id: 'my-profile',
      name: 'Thông tin',
      path: '/my-profile',
      active: true,
      img: 'assets/images/home/profile.png'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
