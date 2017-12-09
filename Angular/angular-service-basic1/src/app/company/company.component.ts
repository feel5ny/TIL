import { Component, OnInit, Inject } from '@angular/core';
import { LogService } from '../log.service';
import { FactoryService } from '../factory.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [
    LogService
  ]
})
export class CompanyComponent implements OnInit {

  constructor(
    @Inject('apiUrl') private apiUrl,
    @Inject('factory') private factoryService: FactoryService
  ) {
    console.log(this.apiUrl)
  }

  ngOnInit() {
  }

}
