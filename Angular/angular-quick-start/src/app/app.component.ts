import { Component } from '@angular/core';
import { OneService } from './one.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '안녕하세요';
  names = [
    '김나영',
    '이혜승',
    '조수현'
  ];
  // https://www.vobour.com/book/view/XSSFQ5wBzsCLAbbo4
  // name =
  constructor(private one: OneService) {
    console.log(one.name)

  }



  custom() {
    console.log('custom')
  }
}
