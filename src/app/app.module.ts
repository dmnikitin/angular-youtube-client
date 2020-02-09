import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchFormComponent } from './components/header/search-form/search-form.component';
import { SearchBoxComponent } from './components/header/search-box/search-box.component';
import { LoginBoxComponent } from './components/header/login-box/login-box.component';
import { SortingBoxComponent } from './components/header/sorting-box/sorting-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SearchFormComponent,
    SearchBoxComponent,
    LoginBoxComponent,
    SortingBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
