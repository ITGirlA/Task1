import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';
import { CoursesListComponent } from './courses-list/courses-list/courses-list.component';
import { FooterComponent } from './footer/footer.component';
import { FakeLogoComponent } from './header/fake-logo/fake-logo.component';
import { CoursesListItemComponent } from './courses-list/courses-list-item/courses-list-item.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { UserLoginComponent } from './header/user-login/user-login.component';
import { LogOffComponent } from './header/log-off/log-off.component';
import { DurationPipe } from './courses-list/courses-list-item/duration.pipe';
import { OrderByDatePipe } from './courses-list/courses-list/order-by-date.pipe';
import { SearchFilterPipe } from './courses-list/courses-list/search-filter.pipe';
import { LoadMoreComponent } from './courses-list/courses-list/load-more/load-more.component';
import { ColorBorderDirective } from './courses-list/courses-list-item/color-border.directive';
import { AddCoursePageComponent } from '../add-edit-course-page/add-course-page/add-course-page.component';
import { DurationComponent } from '../add-edit-course-page/add-course-page/duration/duration.component';
import { CreationDateComponent } from '../add-edit-course-page/add-course-page/creation-date/creation-date.component';
import { ButtonsBlockComponent } from '../add-edit-course-page/add-course-page/buttons-block/buttons-block.component';
import { AuthorsComponent } from '../add-edit-course-page/add-course-page/authors/authors.component';


@NgModule({
  declarations: [HeaderComponent, BreadcrumbsComponent, ToolboxComponent, CoursesListComponent, FooterComponent,
    FakeLogoComponent, CoursesListItemComponent, UserLoginComponent, LogOffComponent, LoadMoreComponent,
    ColorBorderDirective, DurationPipe, OrderByDatePipe, SearchFilterPipe, AddCoursePageComponent, DurationComponent,
    CreationDateComponent, ButtonsBlockComponent, AuthorsComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [HeaderComponent, BreadcrumbsComponent, ToolboxComponent, CoursesListComponent, FooterComponent,
    FakeLogoComponent, CoursesListItemComponent, UserLoginComponent, LogOffComponent, LoadMoreComponent,
    ColorBorderDirective, DurationPipe, OrderByDatePipe, SearchFilterPipe, AddCoursePageComponent, DurationComponent,
    CreationDateComponent, ButtonsBlockComponent, AuthorsComponent]
})
export class CoursesPageModule { }
