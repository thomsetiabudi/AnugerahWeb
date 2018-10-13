import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KisahComponent } from './kisah/kisah.component';
import { GembalaComponent } from './gembala/gembala.component';
import { GembalaEddyComponent } from './gembala-eddy/gembala-eddy.component';
import { GembalaPranawaComponent } from './gembala-pranawa/gembala-pranawa.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'kisah', component: KisahComponent },
  { path: 'kisah/gembala', component: GembalaComponent },
  { path: 'kisah/gembala/febrian', component: GembalaComponent },
  { path: 'kisah/gembala/eddy', component: GembalaEddyComponent },
  { path: 'kisah/gembala/pranawa', component: GembalaPranawaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
