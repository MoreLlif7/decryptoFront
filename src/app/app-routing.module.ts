import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageGameComponent } from './game/page-game/page-game.component';
import { PageLoginComponent } from './login/page-login/page-login.component';
import { PageNotFoundComponentComponent } from './shared/page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  { path: 'game', component: PageGameComponent },
  { path: 'login', component: PageLoginComponent },
  { path: '', redirectTo: '/login', pathMatch:'full'},
  { path: '**', component:  PageNotFoundComponentComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
