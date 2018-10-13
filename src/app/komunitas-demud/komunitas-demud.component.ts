import { Component, OnInit, ViewChild } from '@angular/core';
import { ModuleVerticalTitleComponent } from '../module-vertical-title/module-vertical-title.component';
import { ModuleMenuComponent } from '../module-menu/module-menu.component';
import { ModuleMenuLink } from '../module-menu-link';

@Component({
  selector: 'app-komunitas-demud',
  templateUrl: './komunitas-demud.component.html',
  styleUrls: ['./komunitas-demud.component.scss']
})
export class KomunitasDemudComponent implements OnInit {
  @ViewChild('moduleTitleVertical') moduleTitleVertical: ModuleVerticalTitleComponent;
  @ViewChild('moduleMenuLinkContainer') moduleMenuLinkContainer: ModuleMenuComponent;
  @ViewChild('moduleContentContainer') moduleContentContainer: any;

  currentOverlayMenu = 'komunitas';
  moduleTitle = 'Komunitas';
  moduleMenuLinkList: ModuleMenuLink[] = [
    { title: 'Kids', routerLink: '/komunitas/kids', isActive: false, isSubMenu: false },
    { title: 'Teens', routerLink: '/komunitas/teens', isActive: false, isSubMenu: false },
    { title: 'Youth', routerLink: '/komunitas/youth', isActive: false, isSubMenu: false },
    { title: 'Dewasa Muda', routerLink: '/komunitas/demud', isActive: true, isSubMenu: false },
    { title: 'Excellent', routerLink: '/komunitas/excellent', isActive: false, isSubMenu: false },
    { title: 'Premium', routerLink: '/komunitas/premium', isActive: false, isSubMenu: false }
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
