import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundComponent } from './../shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'video/:id', component: DetailsPageComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
