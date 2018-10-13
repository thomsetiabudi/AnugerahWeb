import { Component, OnInit, ViewChild } from '@angular/core';
import { ModuleVerticalTitleComponent } from '../module-vertical-title/module-vertical-title.component';
import { ModuleMenuComponent } from '../module-menu/module-menu.component';
import { ModuleMenuLink } from '../module-menu-link';

@Component({
  selector: 'app-persekutuan-connect',
  templateUrl: './persekutuan-connect.component.html',
  styleUrls: ['./persekutuan-connect.component.scss']
})
export class PersekutuanConnectComponent implements OnInit {
  @ViewChild('moduleTitleVertical') moduleTitleVertical: ModuleVerticalTitleComponent;
  @ViewChild('moduleMenuLinkContainer') moduleMenuLinkContainer: ModuleMenuComponent;
  @ViewChild('moduleContentContainer') moduleContentContainer: any;

  currentOverlayMenu = 'persekutuan';
  moduleTitle = 'Persekutuan';
  moduleMenuLinkList: ModuleMenuLink[] = [
    { title: 'Connect', routerLink: '/persekutuan/connect', isActive: true, isSubMenu: false },
    { title: 'Persekutuan Wilayah', routerLink: '/persekutuan/pw', isActive: false, isSubMenu: false }
  ];

  constructor() { }

  ngOnInit() {

  }

  onOverlayMenuActivated(activated: boolean) {
    if (!activated) {
      this.moduleMenuLinkContainer.toggleHideComponent(false);
      this.moduleTitleVertical.toggleHideComponent(false);
      (this.moduleContentContainer.nativeElement as HTMLElement).className = 'moduleContentContainer';
     } else {
      this.moduleMenuLinkContainer.toggleHideComponent(true);
      this.moduleTitleVertical.toggleHideComponent(true);
      (this.moduleContentContainer.nativeElement as HTMLElement).className = 'moduleContentContainer hideContent';
     }
  }
}
