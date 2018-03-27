import { Injectable } from '@angular/core';
import { observable, computed, action } from 'mobx';
import { sum } from 'lodash';


@Injectable()
export class AccountService {
  @observable transactions: number[] = [];
  constructor() { }

  getBalance(): number {
    // console.log(sum(this.transactions));
    console.count('compute balance');
    return sum(this.transactions);
    // return this.transactions.reduce((a, b) => a + b, 0);

  }

  isNegative(): boolean {
    return this.getBalance() < 0;
  }

  deposit(money: number) {
    this.transactions = [...this.transactions, money];
  }

  withdraw(money: number) {
    this.transactions = [...this.transactions, -money];
  }
}
