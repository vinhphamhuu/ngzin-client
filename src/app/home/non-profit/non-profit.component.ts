import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NonProfitService } from '../../services/non-profit.service';

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
  listPromise: Array<Subscription> = [];

  constructor(private nonProfitService: NonProfitService) {
    this.listPromise.push(this.nonProfitService.getUser().subscribe(res => {
      this.userSelected.mainMember = res && res.mainMember;
      this.userSelected.countMember = 5
    }))
   }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    this.listPromise.forEach(element => {
      element.unsubscribe();
    });
  }
}
