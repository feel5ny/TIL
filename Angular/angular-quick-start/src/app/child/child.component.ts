import {
  Component,
  OnInit,
  OnChanges,
  Input,
  EventEmitter,
  Output,
  AfterContentInit,
  AfterViewInit,
  AfterContentChecked,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked {
  @Input() name;
  @Input() age;

  @Output() next = new EventEmitter()

  constructor() {
    console.error('constructor')
  }

  ngOnChanges() {
    console.error('ngOnChanges')
  }

  ngOnInit() {
    console.error('ngOnInit')
    setInterval(() => {
      this.next.emit()
    }, 3000)
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  click(text, event) {
    console.log(text)
    console.log(event)
  }

}
