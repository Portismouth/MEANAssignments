import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(private _shintoService: ShintoService) { }

  value;
  balance;
  purchaseForm: any;

  ngOnInit() {
    this.value = this._shintoService.value;
    this.balance = this._shintoService.balance;
    this.purchaseForm = { quantity: 0 }
  }

  onSubmitPurch(num){
    this._shintoService.buyCoin(this.purchaseForm.quantity);
    this.value = this._shintoService.value;
    this.balance = this._shintoService.balance;
    this.purchaseForm = { quantity: 0 }
  }

}
