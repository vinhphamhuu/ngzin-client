import { Component, OnInit } from '@angular/core';
import { NonProfitService } from '../../../services/non-profit.service';

@Component({
  selector: 'app-np-user-content',
  templateUrl: './np-user-content.component.html'
})
export class NpUserContentComponent implements OnInit {

  constructor(private nonProfitService: NonProfitService) { }

  ngOnInit() {
  }
}
