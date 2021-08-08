import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-non-profit',
  templateUrl: './non-profit.component.html',
  styleUrls: ['./non-profit.component.scss']
})
export class NonProfitComponent implements OnInit {

  listUsers: any = [];
  userSelected: any = {
    mainMember: '',
    countMember: 0
  };

  constructor() { }

  ngOnInit() {
    this.initListUsers();
  }
  setUser(user: any) {
    this.userSelected.mainMember = user.mainMember;
    this.userSelected.countMember = 5
  }

  initListUsers() {
    this.listUsers = [
      {
        name: "Nguyễn Văn A-1",
        address: "Ấp 2",
        mainMember: "Nguyên Văn A",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male'
      },
      {
        name: "Nguyễn Văn B-1",
        address: "Ấp 1",
        mainMember: "Nguyên Văn B",
        avatar: "assets/images/non-profit/user-female.png",
        gender: 'female'
      },
      {
        name: "Nguyễn Văn A-1",
        address: "Ấp 2",
        mainMember: "Nguyên Văn A",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male'
      },
      {
        name: "Nguyễn Văn B-1",
        address: "Ấp 1",
        mainMember: "Nguyên Văn B",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male'
      },
      {
        name: "Nguyễn Văn A-1",
        address: "Ấp 2",
        mainMember: "Nguyên Văn A",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male'
      },
      {
        name: "Nguyễn Văn B-1",
        address: "Ấp 1",
        mainMember: "Nguyên Văn B",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male'
      },
      {
        name: "Nguyễn Văn A-1",
        address: "Ấp 2",
        mainMember: "Nguyên Văn A",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male'
      },
      {
        name: "Nguyễn Văn B-1",
        address: "Ấp 1",
        mainMember: "Nguyên Văn B",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male'
      },
      {
        name: "Nguyễn Văn A-1",
        address: "Ấp 2",
        mainMember: "Nguyên Văn A",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male'
      },
      {
        name: "Nguyễn Văn B-1",
        address: "Ấp 1",
        mainMember: "Nguyên Văn B",
        avatar: "assets/images/non-profit/user-female.png",
        gender: 'female'
      },
      {
        name: "Nguyễn Văn A-1",
        address: "Ấp 2",
        mainMember: "Nguyên Văn A",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male'
      },
      {
        name: "Nguyễn Văn B-1",
        address: "Ấp 1",
        mainMember: "Nguyên Văn B",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male'
      },
      {
        name: "Nguyễn Văn A-1",
        address: "Ấp 2",
        mainMember: "Nguyên Văn A",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male'
      },
      {
        name: "Nguyễn Văn B-1",
        address: "Ấp 1",
        mainMember: "Nguyên Văn B",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male'
      },
      {
        name: "Nguyễn Văn A-1",
        address: "Ấp 2",
        mainMember: "Nguyên Văn A",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male'
      },
      {
        name: "Nguyễn Văn B-1",
        address: "Ấp 1",
        mainMember: "Nguyên Văn B",
        avatar: "assets/images/non-profit/user-male.png",
        gender: 'male'
      },
    ]
  }


}
