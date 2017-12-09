import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  age = 27;

  constructor() { }

  ngOnInit() {
  }

  next() {
    this.age += 1
  }

}
