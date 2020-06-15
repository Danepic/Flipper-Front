import { Component, OnInit, Injectable } from '@angular/core';
import { CheckHealthService } from '../check-health/service/check-health.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class GameComponent implements OnInit {

  game : any;

  constructor(private checkHealthService: CheckHealthService) { }

  ngOnInit(): void {
    this.checkHealthService.checkLogInHealth().subscribe(data => console.log(data), error => console.log(error));
    this.checkHealthService.checkCoreHealth().subscribe(data => console.log(data), error => console.log(error));
  }

}
