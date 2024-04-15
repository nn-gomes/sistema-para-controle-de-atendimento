import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public seconds: any;
  constructor(public timerService: TimerService) {
    this.seconds = timerService.second;
  }

  start() {
    this.timerService.start();
    console.log('here')
  }

  pause() {
    this.timerService.pause();
  }

  returnData() {
    this.timerService.returnData(this.seconds);
  }

}
