import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './courses-page/courses-list/courses-list/courses-list.component';
import { NoContentComponent } from './no-content/no-content/no-content.component';
import { AddCoursePageComponent } from './add-edit-course-page/add-course-page/add-course-page.component';

const routes: Routes = [
    { path: 'courses', component: CoursesListComponent },
    { path: '', redirectTo: '/courses', pathMatch: 'full' },

    { path: 'courses/:id', component: AddCoursePageComponent },
    { path: 'courses/new', component: AddCoursePageComponent },

    { path: '**', component: NoContentComponent  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
