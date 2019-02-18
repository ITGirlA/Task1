import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoursesListComponent } from './courses-list/courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list/courses-list-item/courses-list-item.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { LoadMoreComponent } from './courses-list/courses-list/load-more/load-more.component';

import { DurationPipe } from './courses-list/courses-list-item/duration.pipe';
import { OrderByDatePipe } from './courses-list/courses-list/order-by-date.pipe';
import { SearchFilterPipe } from './courses-list/courses-list/search-filter.pipe';
import { ColorBorderDirective } from './courses-list/courses-list-item/color-border.directive';

@NgModule({
  declarations: [ToolboxComponent, CoursesListComponent, CoursesListItemComponent,
    LoadMoreComponent, ColorBorderDirective, DurationPipe, OrderByDatePipe, SearchFilterPipe],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [ToolboxComponent, CoursesListComponent, CoursesListItemComponent,
    LoadMoreComponent, ColorBorderDirective, DurationPipe, OrderByDatePipe, SearchFilterPipe]
})
export class CoursesPageModule { }
