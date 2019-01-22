import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesPageModule } from './courses-page/courses-page.module';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleHooksComponent } from './lifecycle/lifecycle-hooks/lifecycle-hooks.component';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './courses-page/courses-list/courses-list/courses-list.component';

const appRoutes: Routes = [
  { path: 'courses', component: CoursesListComponent },
  { path: '', redirectTo: 'courses', pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    LifecycleHooksComponent
  ],
  imports: [
    BrowserModule,
    CoursesPageModule, 
    RouterModule.forRoot(appRoutes)
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
