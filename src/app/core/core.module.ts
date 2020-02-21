import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultsComponent } from '../youtube/components/search-results/search-results.component';
import { SearchItemComponent } from '../youtube/components/search-item/search-item.component';
import { SortingBoxComponent } from './components/sorting-box/sorting-box.component';
import { BorderColorDirective } from '../youtube/directives/border-color-directive.directive';
import { DateToColorPipe } from '../youtube/pipes/date-to-color.pipe';
import { SearchFilterPipe } from '../youtube/pipes/search-filter.pipe';
import { SearchSortPipe } from '../youtube/pipes/search-sort.pipe';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { LoadDataService } from './services/load-data.service';
import { UserActionsService } from './services/user-actions.service';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SortingBoxComponent,
    BorderColorDirective,
    DateToColorPipe,
    SearchFilterPipe,
    SearchSortPipe,
    LoginBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [LoadDataService, UserActionsService],
  exports: [
    HeaderComponent,
    SearchResultsComponent
  ]
})
export class CoreModule { }
