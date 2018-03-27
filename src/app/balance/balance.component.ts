import { AccountService } from './../account.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-balance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  constructor(private account: AccountService) { }

  ngOnInit() {

  }

  count() {
    console.count('detect changes');
  }



}
