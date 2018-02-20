import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  constructor(private _shintoService: ShintoService) { }

  ledger;

  ngOnInit() {
    this.ledger = this._shintoService.showLedger();
    console.log(this.ledger);
  }

}
