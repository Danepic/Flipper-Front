import { Component, OnInit, Injectable, ViewChild, ElementRef } from '@angular/core';
import { CheckHealthService } from '../check-health/service/check-health.service';
import { GameService } from './service/game.service';
import { ErrorHandleService } from '../error-handle/service/error-handle.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class GameComponent implements OnInit {

  @ViewChild('loadingElement')
  loadingElement: ElementRef;

  gameList: any;

  constructor(private checkHealthService: CheckHealthService, private service: GameService,
    private errorHandleService: ErrorHandleService) { }

  ngOnInit(): void {
    this.checkHealthService.checkLogInHealth().subscribe(data => console.log(data), error => console.log(error));
    this.checkHealthService.checkCoreHealth().subscribe(data => console.log(data), error => console.log(error));

    this.service.getGames().subscribe(data => {
      this.gameList = data;
      this.loadingElement.nativeElement.textContent = '';
      this.loadingElement.nativeElement.innerText = '';
    },
    error => this.errorHandleService.throwToastException(error.error.message));
  }

}
