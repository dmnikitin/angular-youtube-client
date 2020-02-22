import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SearchSortPipe } from './pipes/search-sort.pipe';
import { DateToColorPipe } from './pipes/date-to-color.pipe';
import { BorderColorDirective } from './directives/border-color-directive.directive';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    BorderColorDirective,
    DateToColorPipe,
    SearchFilterPipe,
    SearchSortPipe,
    DetailsPageComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class YoutubeModule { }
