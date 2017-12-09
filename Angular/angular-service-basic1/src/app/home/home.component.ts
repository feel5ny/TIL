import { Component, OnInit, Inject } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject('log') private logService,
    @Inject('apiUrl') private apiUrl,
  ) {
    this.logService.info(this.apiUrl);
  }

  ngOnInit() {
  }

}
