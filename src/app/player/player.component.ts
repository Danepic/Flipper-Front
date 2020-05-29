import { Component, OnInit, Injectable } from '@angular/core';
import { Player } from './service/model/player.model';
import { PlayerService } from './service/player.service';

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

  constructor(private service: PlayerService) { }

  ngOnInit(): void {
    this.service.checkLogInHealth().subscribe(data => console.log(data), error => console.log(error));
    this.service.checkCoreHealth().subscribe(data => console.log(data), error => console.log(error));

    this.toStepOne = true;
    this.toStepTwo = false;
    this.toStepThree = false;
    this.player = new Player;
  }



}
