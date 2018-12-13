import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { CoursesListComponent } from './courses-list/courses-list/courses-list.component';
import { FooterComponent } from './footer/footer.component';
import { FakeLogoComponent } from './header/fake-logo/fake-logo.component';
import { CoursesListItemComponent } from './courses-list/courses-list-item/courses-list-item.component';

@NgModule({
  declarations: [HeaderComponent, BreadcrumbsComponent, ToolboxComponent, CoursesListComponent, FooterComponent, FakeLogoComponent, CoursesListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, BreadcrumbsComponent, ToolboxComponent, CoursesListComponent , FooterComponent]
})
export class CoursesPageModule { }
