import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { LogService } from './log.service';
import { FactoryService } from './factory.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LogService,
    {
      provide: 'log', // provider의 이름을 주입
      useClass: LogService
    },
    {
      provide: 'apiUrl', // provider의 이름을 주입
      useValue: 'https://api.github.com/users'
    },
    {
      provide: 'factory', // provider의 이름을 주입
      useFactory: (logService) => {
        return new FactoryService(logService, false);
      },
      deps: [
        LogService
      ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
