import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShintoService {
  constructor() {
    this.getRandQ()
  }

  //algos
  questions = [
    { question: "What is the 7th number in the Fibonacci sequence (staring at 1)?", answer: 13 },
    { question: "What is the final total when you sum of all numbers in the array [3,2,4,5] multiplied by it's length?", answer: 56 },
    { question: "What is each number squared in the array [6,7,3,5,4]? Your answer should be an array.", answer: "[36,49,9,25,16]" }
  ];

  //coin params
  value = 0;
  balance = 0;
  ledger = [];

  getRandQ() {
    let index = Math.floor(Math.random() * (((this.questions.length - 1) - 0) + 1) + 0)
    return this.questions[index];
  }

  getCoinValue() {
    return this.value;
  }

  increaseValueFromMining(){
    this.value += 1;
    let transaction = { id: Math.floor(Math.random() * 9999) + 1, action: "Mined", value: this.value };
    this.balance += 1;
    this.addToLedger(transaction);
  }

  buyCoin(num) {
    this.value += num;
    let transaction = { id: Math.floor(Math.random() * 9999) + 1, action: "Bought", value: this.value };
    this.balance += num;
    this.addToLedger(transaction);
  }

  sellCoin() {
    this.value -= 1;
    let transaction = { id: Math.floor(Math.random() * 9999) + 1, action: "Bought", value: this.value };
    this.balance -= 1;
    this.addToLedger(transaction);
  }

  addToLedger(trans) {
    this.ledger.push(trans);
  }

  showLedger(){
    return this.ledger;
  }

}
