import { Component, OnInit, Renderer2 } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HeaderNavComponent implements OnInit {

  navLink: any = [
    {
      id: 'home',
      name: 'Home',
      path: '/home',
      active: true,
    },
    {
      id: 'dashboard',
      name: 'Dashboard',
      path: '/dashboard',
      active: false,
    },
    {
      id: 'covid',
      name: 'Covid',
      path: '/covid',
      active: false,
    }
  ]
  sideBarState: boolean = false;
  menuState:string = 'out';

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.sideBarState = !this.sideBarState;
    this.menuState = this.sideBarState ? 'in' : 'out';
    if (this.sideBarState) {
      this.renderer.addClass(document.body, 'sidebar-open');
    } else {
      this.renderer.removeClass(document.body, 'sidebar-open');
    }
  }
  setActiveLink(id: string) {
    for (let index = 0; index < this.navLink.length; index++) {
      const element = this.navLink[index];
      if (element.id == id) {
        element.active = true;
      } else {
        element.active = false;
      }
    }
    console.log(this.navLink);
  }
}
