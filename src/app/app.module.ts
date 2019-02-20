import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesPageModule } from './courses-page/courses-page.module';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleHooksComponent } from './lifecycle/lifecycle-hooks/lifecycle-hooks.component';

import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';

import { AddCoursePageComponent } from './add-edit-course-page/add-course-page/add-course-page.component';
import { CreationDateComponent } from './add-edit-course-page/add-course-page/creation-date/creation-date.component';
import { DurationComponent } from './add-edit-course-page/add-course-page/duration/duration.component';
import { AuthorsComponent } from './add-edit-course-page/add-course-page/authors/authors.component';
import { ButtonsBlockComponent } from './add-edit-course-page/add-course-page/buttons-block/buttons-block.component';
import { SharedModule } from './shared/shared.module';
import { NoContentComponent } from './no-content/no-content/no-content.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    LifecycleHooksComponent,
    LoginPageComponent,
    AddCoursePageComponent,
    CreationDateComponent,
    DurationComponent,
    AuthorsComponent,
    ButtonsBlockComponent,
    NoContentComponent,
  ],
  imports: [
    BrowserModule,
    CoursesPageModule,
    SharedModule,
    RouterModule.forRoot(routes, { useHash: true }),
    FormsModule
   ],
   exports: [AddCoursePageComponent,
    CreationDateComponent,
    DurationComponent,
    AuthorsComponent,
    ButtonsBlockComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
