import { Component, OnInit } from '@angular/core';
import { OneService } from '../one.service';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css']
})
export class Sample2Component implements OnInit {
  name = 'Clara';

  constructor(private one: OneService) { }

  ngOnInit() {
    setTimeout(() => {
      this.name = 'mark';
    }, 2000)
  }
  click() {
    this.one.name = 'AAAA'
    // console.log(e)
    // this.name = 'gloorx'
  }

}
