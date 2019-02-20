import { Routes } from '@angular/router';
import { CoursesListComponent } from './courses-page/courses-list/courses-list/courses-list.component';
import { NoContentComponent } from './no-content/no-content/no-content.component';
import { AddCoursePageComponent } from './add-edit-course-page/add-course-page/add-course-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './auth.guard';


export const routes: Routes = [
    { path: '', redirectTo: '/courses', pathMatch: 'full' , canActivate: [AuthGuard]},
    { path: 'courses/:id', component: AddCoursePageComponent , canActivate: [AuthGuard]},
    { path: 'courses/new', component: AddCoursePageComponent , canActivate: [AuthGuard]},
    { path: 'courses', component: CoursesListComponent, canActivate: [AuthGuard] },
    { path: 'log', component: LoginPageComponent },
    { path: '**', component: NoContentComponent , canActivate: [AuthGuard]}
];


