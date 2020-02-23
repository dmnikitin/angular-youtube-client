import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  {
    path: 'youtube',
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
    canLoad: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
