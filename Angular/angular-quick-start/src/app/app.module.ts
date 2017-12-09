import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';
import { Sample3Component } from './sample3/sample3.component';
import { GrandComponent } from './grand/grand.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { OneService } from './one.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Sample1Component,
    Sample2Component,
    Sample3Component,
    GrandComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    OneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
