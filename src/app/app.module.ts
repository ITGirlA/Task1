import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesPageModule } from './courses-page/courses-page.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoursesPageModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
