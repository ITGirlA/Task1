import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesPageModule } from './courses-page/courses-page.module';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleHooksComponent } from './lifecycle/lifecycle-hooks/lifecycle-hooks.component';
import { AppRoutingModule }     from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    LifecycleHooksComponent
  ],
  imports: [
    BrowserModule,
    CoursesPageModule, 
    AppRoutingModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
