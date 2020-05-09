import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardPagesGuard } from './gaurds/guard-pages.guard';
import { GuardGuard } from './login_guard/guard.guard';

const routes: Routes = [
  { path: '**', redirectTo: '404', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), canActivate: [GuardPagesGuard] },
  {
    path: 'add-product',
    loadChildren: () => import('./add-product/add-product.module').then(m => m.AddProductPageModule)
    , canActivate: [GuardPagesGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    , canActivate: [GuardGuard]
  },
  {
    path: 'edit-product/:id',
    loadChildren: () => import('./edit-product/edit-product.module').then(m => m.EditProductPageModule)
    , canActivate: [GuardPagesGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
