import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '',
    children: [
        { path: 'login', pathMatch: 'full', component: LoginPageComponent, data : {authType : 0} },
        { path: 'signup', pathMatch: 'full', component: LoginPageComponent, data : {authType : 1} },
    ],
  },
  {
    path: 'videos',
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
    canLoad: [AuthGuard],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
