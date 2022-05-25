import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then(m => m.SplashPageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'welcome1',
    loadChildren: () => import('./welcome1/welcome1.module').then( m => m.Welcome1PageModule)
  },
  {
    path: 'welcomes/:wid',
    loadChildren: () => import('./welcomes/welcomes.module').then(m => m.WelcomesPageModule)
  },
  {
    path: 'pests/:wid',
    loadChildren: () => import('./pests/pests.module').then(m => m.PestsPageModule)
  },
  {
    path: 'content/:cid/:wid',
    loadChildren: () => import('./content-page/content-page.module').then(m => m.ContentPagePageModule)
  },
  {
    path: 'bougainville-cocoa',
    loadChildren: () => import('./bougainville-cocoa/bougainville-cocoa.module').then( m => m.BougainvilleCocoaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
