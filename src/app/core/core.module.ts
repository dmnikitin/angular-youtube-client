import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SortingBoxComponent } from './components/sorting-box/sorting-box.component';
import { BorderColorDirective } from './directives/border-color-directive.directive';
import { DateToColorPipe } from './pipes/date-to-color.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SearchSortPipe } from './pipes/search-sort.pipe';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { LoadDataService } from './services/load-data.service';
import { MainComponent } from './components/main/main.component';

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
    LoginBoxComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [LoadDataService],
  exports: [MainComponent]
})
export class CoreModule { }
