import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class FactoryService {

  constructor(
    private logService: LogService,
    private isVisible: boolean
  ) {
    this.logService.info(`${this.isVisible}`);

  }

}
