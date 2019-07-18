import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'welcome', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
  { path: 'sign-in', loadChildren: './pages/sign-in/sign-in.module#SignInPageModule' },
  { path: 'sign-up', loadChildren: './pages/sign-up/sign-up.module#SignUpPageModule' },
  { path: 'startup-profile', loadChildren: './pages/startup-profile/startup-profile.module#StartupProfilePageModule' },
  { path: 'angel-profile', loadChildren: './pages/angel-profile/angel-profile.module#AngelProfilePageModule' },
  { path: 'swipe-pad', loadChildren: './pages/swipe-pad/swipe-pad.module#SwipePadPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
