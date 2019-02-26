import { Component, OnInit, ViewChild } from '@angular/core';
import { ModuleVerticalTitleComponent } from '../module-vertical-title/module-vertical-title.component';
import { ModuleMenuComponent } from '../module-menu/module-menu.component';
import { ModuleMenuLink } from '../module-menu-link';

@Component({
  selector: 'app-persekutuan',
  templateUrl: './persekutuan.component.html',
  styleUrls: ['./persekutuan.component.scss']
})
export class PersekutuanComponent implements OnInit {
  @ViewChild('moduleTitleVertical') moduleTitleVertical: ModuleVerticalTitleComponent;
  @ViewChild('moduleMenuLinkContainer') moduleMenuLinkContainer: ModuleMenuComponent;
  @ViewChild('moduleContentContainer') moduleContentContainer: any;

  currentOverlayMenu = 'connect';
  moduleTitle = 'CONNECT';
  moduleMenuLinkList: ModuleMenuLink[] = [
    { title: 'Connect (Youth)', routerLink: '/connect/youth', isActive: false, isSubMenu: false },
    { title: 'CONNECT', routerLink: '/connect/connect', isActive: false, isSubMenu: false }
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
