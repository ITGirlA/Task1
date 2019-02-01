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
import { LoadMoreComponent } from './load-more/load-more.component';
import { UserLoginComponent } from './header/user-login/user-login.component';
import { LogOffComponent } from './header/log-off/log-off.component';
import { SearchFieldComponent } from './toolbox/search-field/search-field.component';
import { SearchButtonComponent } from './toolbox/search-button/search-button.component';
import { AddButtonComponent } from './toolbox/add-button/add-button.component';

@NgModule({
  declarations: [HeaderComponent, BreadcrumbsComponent, ToolboxComponent, CoursesListComponent, FooterComponent,
    FakeLogoComponent, CoursesListItemComponent, UserLoginComponent, LogOffComponent, SearchFieldComponent,
    SearchButtonComponent, AddButtonComponent, LoadMoreComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [HeaderComponent, BreadcrumbsComponent, ToolboxComponent, CoursesListComponent, FooterComponent,
    FakeLogoComponent, CoursesListItemComponent, UserLoginComponent, LogOffComponent, SearchFieldComponent,
    SearchButtonComponent, AddButtonComponent, LoadMoreComponent]
})
export class CoursesPageModule { }
