import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
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

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navToPage(page: string) {
    this.router.navigateByUrl(page);    
  }

}
