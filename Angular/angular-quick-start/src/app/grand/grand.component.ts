import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand',
  templateUrl: './grand.component.html',
  styleUrls: ['./grand.component.css']
})
export class GrandComponent implements OnInit {
  age = 40
  constructor() { }

  ngOnInit() {
  }

  upAge() {
    this.age += 1
  }

}
