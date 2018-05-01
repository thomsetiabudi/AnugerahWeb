import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KisahComponent } from './kisah/kisah.component';
import { SejarahComponent } from './sejarah/sejarah.component';
import { GembalaComponent } from './gembala/gembala.component';
import { KomunitasComponent } from './komunitas/komunitas.component';
import { TeensComponent } from './teens/teens.component';
import { AktivitasComponent } from './aktivitas/aktivitas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'kisah', component: KisahComponent },
  { path: 'kisah/sejarah', component: SejarahComponent },
  { path: 'kisah/gembala', component: GembalaComponent },
  { path: 'komunitas', component: KomunitasComponent },
  { path: 'komunitas/teens', component: TeensComponent },
  { path: 'aktivitas', component: AktivitasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}