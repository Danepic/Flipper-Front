import { Component, OnInit } from '@angular/core';
import { BugService } from './service/bug.service';
import { Bug } from './service/model/bug.model';
import { CheckHealthService } from '../check-health/service/check-health.service';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.scss']
})
export class BugComponent implements OnInit {

  enableForm: boolean;

  enableLogin: boolean;

  enableThankyou: boolean;

  bug: Bug;

  constructor(private checkHealthService: CheckHealthService) { }

  ngOnInit(): void {
    this.checkHealthService.checkLogInHealth().subscribe(data => console.log(data), error => console.log(error));
    this.checkHealthService.checkCoreHealth().subscribe(data => console.log(data), error => console.log(error));

    this.enableForm = true;
    this.enableLogin = false;
    this.enableThankyou = false;
    this.bug = new Bug;
  }

}
