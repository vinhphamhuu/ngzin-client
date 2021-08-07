import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
})
export class MyProfileComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }
  goBack() {
    this._location.back();
  }

}
