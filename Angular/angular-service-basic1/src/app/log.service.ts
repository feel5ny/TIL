import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  count = 0;

  constructor() { }

  public info(message: string): void {
    console.log('info', message, this.count);
    this.count++;
  }

}
