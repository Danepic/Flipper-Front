import { Component, OnInit, Injectable } from '@angular/core';
import { Player } from './service/model/player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class PlayerComponent implements OnInit {

  toStepOne: boolean;

  toStepTwo: boolean;

  toStepThree: boolean;

  player: Player;

  constructor() { }

  ngOnInit(): void {
    this.toStepOne = true;
    this.toStepTwo = false;
    this.toStepThree = false;
    this.player = new Player;
  }



}
