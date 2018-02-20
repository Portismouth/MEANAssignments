import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

  constructor(private _shintoService: ShintoService) { }

  question;
  submitAnswer: any;

  ngOnInit() {
    this.question = this._shintoService.getRandQ();

    this.submitAnswer = { answer: "" }
  }

  onSubmitAnswer(){
    if(this.submitAnswer.answer == this.question.answer){
      this._shintoService.increaseValueFromMining();
      this.question = this._shintoService.getRandQ();
      this.submitAnswer = { answer: "" };
    } else {
      this.question = this._shintoService.getRandQ();
      this.submitAnswer = { answer: "" };
    }
  }

}
