import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OneService } from '../one.service';

@Component({
  selector: 'app-sample3',
  templateUrl: './sample3.component.html',
  styleUrls: ['./sample3.component.css']
})
export class Sample3Component implements OnInit {

  @Input() test;
  @Output() custom = new EventEmitter(); // node의 EventEmitter

  disabled = true;
  constructor(private one: OneService) {
    console.log(one.name + 'sample3')
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.disabled = false;
    //   this.custom.emit();
    // }, 5000)
  }
  click() {
    this.one.name = 'BBBB'
    // console.log(e)
    // this.name = 'gloorx'
  }

}
