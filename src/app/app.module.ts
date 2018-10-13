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
import { GembalaEddyComponent } from './gembala-eddy/gembala-eddy.component';
import { GembalaPranawaComponent } from './gembala-pranawa/gembala-pranawa.component';
import { PersekutuanComponent } from './persekutuan/persekutuan.component';
import { PersekutuanConnectComponent } from './persekutuan-connect/persekutuan-connect.component';
import { PersekutuanPwComponent } from './persekutuan-pw/persekutuan-pw.component';
import { KomunitasComponent } from './komunitas/komunitas.component';
import { KomunitasKidsComponent } from './komunitas-kids/komunitas-kids.component';
import { KomunitasTeensComponent } from './komunitas-teens/komunitas-teens.component';
import { KomunitasYouthComponent } from './komunitas-youth/komunitas-youth.component';
import { KomunitasDemudComponent } from './komunitas-demud/komunitas-demud.component';
import { KomunitasExcellentComponent } from './komunitas-excellent/komunitas-excellent.component';
import { KomunitasPremiumComponent } from './komunitas-premium/komunitas-premium.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KisahComponent,
    DynamicBackgroundImageComponent,
    OverlayMenuComponent,
    ModuleVerticalTitleComponent,
    ModuleMenuComponent,
    GembalaComponent,
    GembalaEddyComponent,
    GembalaPranawaComponent,
    PersekutuanComponent,
    PersekutuanConnectComponent,
    PersekutuanPwComponent,
    KomunitasComponent,
    KomunitasKidsComponent,
    KomunitasTeensComponent,
    KomunitasYouthComponent,
    KomunitasDemudComponent,
    KomunitasExcellentComponent,
    KomunitasPremiumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
