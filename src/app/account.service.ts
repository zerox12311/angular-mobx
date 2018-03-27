import { Injectable } from '@angular/core';
import { observable, computed, action } from 'mobx';
import { sum } from 'lodash';


@Injectable()
export class AccountService {
  @observable transactions: number[] = [];
  constructor() { }

  @computed get balance(): number {
    // console.log(sum(this.transactions));
    console.count('compute balance');
    return sum(this.transactions);
    // return this.transactions.reduce((a, b) => a + b, 0);

  }

  @computed get isNegative(): boolean {
    return this.balance < 0;
  }

  @action deposit(money: number) {
    this.transactions = [...this.transactions, money];
  }

  @action withdraw(money: number) {
    this.transactions = [...this.transactions, -money];
  }
}
