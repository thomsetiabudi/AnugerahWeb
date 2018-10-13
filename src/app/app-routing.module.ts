import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KisahComponent } from './kisah/kisah.component';
import { GembalaComponent } from './gembala/gembala.component';
import { GembalaEddyComponent } from './gembala-eddy/gembala-eddy.component';
import { GembalaPranawaComponent } from './gembala-pranawa/gembala-pranawa.component';
import { PersekutuanComponent } from './persekutuan/persekutuan.component';
import { PersekutuanConnectComponent } from './persekutuan-connect/persekutuan-connect.component';
import { PersekutuanPwComponent } from './persekutuan-pw/persekutuan-pw.component';
import { KomunitasComponent } from './komunitas/komunitas.component';
import { KomunitasKidsComponent } from './komunitas-kids/komunitas-kids.component';
import { KomunitasPremiumComponent } from './komunitas-premium/komunitas-premium.component';
import { KomunitasTeensComponent } from './komunitas-teens/komunitas-teens.component';
import { KomunitasYouthComponent } from './komunitas-youth/komunitas-youth.component';
import { KomunitasDemudComponent } from './komunitas-demud/komunitas-demud.component';
import { KomunitasExcellentComponent } from './komunitas-excellent/komunitas-excellent.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'kisah', component: KisahComponent },
  { path: 'kisah/sejarah', component: KisahComponent },
  { path: 'kisah/gembala', component: GembalaComponent },
  { path: 'kisah/gembala/febrian', component: GembalaComponent },
  { path: 'kisah/gembala/eddy', component: GembalaEddyComponent },
  { path: 'kisah/gembala/pranawa', component: GembalaPranawaComponent },
  { path: 'persekutuan', component: PersekutuanComponent },
  { path: 'persekutuan/connect', component: PersekutuanConnectComponent },
  { path: 'persekutuan/pw', component: PersekutuanPwComponent },
  { path: 'komunitas', component: KomunitasComponent },
  { path: 'komunitas/kids', component: KomunitasKidsComponent },
  { path: 'komunitas/teens', component: KomunitasTeensComponent },
  { path: 'komunitas/youth', component: KomunitasYouthComponent },
  { path: 'komunitas/demud', component: KomunitasDemudComponent },
  { path: 'komunitas/excellent', component: KomunitasExcellentComponent },
  { path: 'komunitas/premium', component: KomunitasPremiumComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
