import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { SharedModule } from './../shared/shared.module';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SearchSortPipe } from './pipes/search-sort.pipe';
import { DateToColorPipe } from './pipes/date-to-color.pipe';
import { BorderColorDirective } from './directives/border-color-directive.directive';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CountTrimPipe } from './pipes/views-count-trim.pipe';
import { TextTrimPipe } from './pipes/text-trim.pipe';

@NgModule({
  declarations: [
    DetailsPageComponent,
    MainPageComponent,
    SearchItemComponent,
    BorderColorDirective,
    DateToColorPipe,
    SearchFilterPipe,
    SearchSortPipe,
    CountTrimPipe,
    TextTrimPipe,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    SharedModule,
  ]
})
export class YoutubeModule { }
