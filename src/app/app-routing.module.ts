import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { KisahComponent } from './kisah/kisah.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'kisah', component: KisahComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}