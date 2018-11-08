import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() counterEvent = new EventEmitter<number>();
  ref;
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.ref = setInterval(() => this.incrementNumber(), 500);
  }

  incrementNumber() {
    this.counterEvent.emit(++this.counter);
  }

  stopGame() {
    clearInterval(this.ref);
  }

}
