import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { KisahComponent } from './kisah/kisah.component';
import { DynamicBackgroundImageComponent } from './dynamic-background-image/dynamic-background-image.component';
import { OverlayMenuComponent } from './overlay-menu/overlay-menu.component';
import { ModuleVerticalTitleComponent } from './module-vertical-title/module-vertical-title.component';
import { ModuleMenuComponent } from './module-menu/module-menu.component';
import { GembalaComponent } from './gembala/gembala.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KisahComponent,
    DynamicBackgroundImageComponent,
    OverlayMenuComponent,
    ModuleVerticalTitleComponent,
    ModuleMenuComponent,
    GembalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
