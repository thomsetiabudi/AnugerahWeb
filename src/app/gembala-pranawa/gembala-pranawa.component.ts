import { Component, OnInit, ViewChild } from '@angular/core';
import { ModuleVerticalTitleComponent } from '../module-vertical-title/module-vertical-title.component';
import { ModuleMenuComponent } from '../module-menu/module-menu.component';
import { ModuleMenuLink } from '../module-menu-link';

@Component({
  selector: 'app-gembala-pranawa',
  templateUrl: './gembala-pranawa.component.html',
  styleUrls: ['./gembala-pranawa.component.scss']
})
export class GembalaPranawaComponent implements OnInit {
  @ViewChild('moduleTitleVertical') moduleTitleVertical: ModuleVerticalTitleComponent;
  @ViewChild('moduleMenuLinkContainer') moduleMenuLinkContainer: ModuleMenuComponent;
  @ViewChild('moduleContentContainer') moduleContentContainer: any;

  currentOverlayMenu = 'kisah';
  moduleTitle = 'Kisah Kami';
  moduleMenuLinkList: ModuleMenuLink[] = [
    { title: 'Sejarah', routerLink: '/kisah', isActive: false, isSubMenu: false },
    { title: 'Visi', routerLink: '/kisah/visi', isActive: false, isSubMenu: false },
    { title: 'Gembala Kami', routerLink: '#', isActive: true, isSubMenu: false },
    { title: 'Pdt. Febrian C.H', routerLink: '/kisah/gembala/febrian', isActive: false, isSubMenu: true },
    { title: 'Pdm. Eddy S.S', routerLink: '/kisah/gembala/eddy', isActive: false, isSubMenu: true },
    { title: 'Pdm. E. Pranawa', routerLink: '/kisah/gembala/pranawa', isActive: true, isSubMenu: true }
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
