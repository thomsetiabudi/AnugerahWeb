import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { KisahComponent } from './kisah/kisah.component';
import { DynamicBackgroundImageComponent } from './dynamic-background-image/dynamic-background-image.component';
import { OverlayMenuComponent } from './overlay-menu/overlay-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KisahComponent,
    DynamicBackgroundImageComponent,
    OverlayMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
