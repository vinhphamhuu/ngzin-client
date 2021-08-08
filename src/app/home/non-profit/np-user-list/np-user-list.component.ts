import { Component, OnInit } from '@angular/core';
import { NonProfitService } from '../../../services/non-profit.service';
import {Location} from '@angular/common';
import { IUser } from '../../../model/index';

@Component({
  selector: 'app-np-user-list',
  templateUrl: './np-user-list.component.html',
})
export class NpUserListComponent implements OnInit {

  listUsers: IUser[] = [];

  constructor(
    private nonProfitService: NonProfitService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.initListUsers();
  }
  goBack() {
    this._location.back();
  }

  setUser(user: IUser) {
    this.nonProfitService.setUser(user);
    this.listUsers.forEach((el: { id: any; selected: boolean; }) => {
      if (el.id === user.id) el.selected = true;
      else el.selected = false;
    });
  }
  initListUsers() {
    this.listUsers = [
      {
        id: 1,
        name: "Nguyễn Văn A-1",
        address: "Ấp 2",
        mainMember: "Nguyên Văn A",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male',
        selected: false
      },
      {
        id: 2,
        name: "Nguyễn Văn B-1",
        address: "Ấp 1",
        mainMember: "Nguyên Văn B",
        avatar: "assets/images/non-profit/user-female.png",
        gender: 'female',
        selected: false
      },
      {
        id: 3,
        name: "Nguyễn Văn A-1",
        address: "Ấp 2",
        mainMember: "Nguyên Văn A",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male',
        selected: false
      },
      {
        id: 4,
        name: "Nguyễn Văn B-1",
        address: "Ấp 1",
        mainMember: "Nguyên Văn B",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male',
        selected: false
      },
      {
        id: 5,
        name: "Nguyễn Văn A-1",
        address: "Ấp 2",
        mainMember: "Nguyên Văn A",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male',
        selected: false
      },
      {
        id: 6,
        name: "Nguyễn Văn B-1",
        address: "Ấp 1",
        mainMember: "Nguyên Văn B",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male',
        selected: false
      },
      {
        id: 7,
        name: "Nguyễn Văn A-1",
        address: "Ấp 2",
        mainMember: "Nguyên Văn A",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male',
        selected: false
      },
      {
        id: 8,
        name: "Nguyễn Văn B-1",
        address: "Ấp 1",
        mainMember: "Nguyên Văn B",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male',
        selected: false
      },
      {
        id: 9,
        name: "Nguyễn Văn A-1",
        address: "Ấp 2",
        mainMember: "Nguyên Văn A",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male',
        selected: false
      },
      {
        id: 10,
        name: "Nguyễn Văn B-1",
        address: "Ấp 1",
        mainMember: "Nguyên Văn B",
        avatar: "assets/images/non-profit/user-female.png",
        gender: 'female',
        selected: false
      },
      {
        id: 11,
        name: "Nguyễn Văn A-1",
        address: "Ấp 2",
        mainMember: "Nguyên Văn A",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male',
        selected: false
      },
      {
        id: 12,
        name: "Nguyễn Văn B-1",
        address: "Ấp 1",
        mainMember: "Nguyên Văn B",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male',
        selected: false
      },
      {
        id: 13,
        name: "Nguyễn Văn A-1",
        address: "Ấp 2",
        mainMember: "Nguyên Văn A",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male',
        selected: false
      },
      {
        id: 14,
        name: "Nguyễn Văn B-1",
        address: "Ấp 1",
        mainMember: "Nguyên Văn B",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male',
        selected: false
      },
      {
        id: 15,
        name: "Nguyễn Văn A-1",
        address: "Ấp 2",
        mainMember: "Nguyên Văn A",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male',
        selected: false
      },
      {
        id: 16,
        name: "Nguyễn Văn B-1",
        address: "Ấp 1",
        mainMember: "Nguyên Văn B",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male',
        selected: false
      },
    ]
  }
}
