import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { ModuleVerticalTitleComponent } from '../module-vertical-title/module-vertical-title.component';

@Component({
  selector: 'app-kisah',
  templateUrl: './kisah.component.html',
  styleUrls: ['./kisah.component.css']
})
export class KisahComponent implements OnInit, AfterViewInit {
  @ViewChild('moduleTitleVertical') moduleTitleVertical: ModuleVerticalTitleComponent;
  @ViewChild('moduleMenuLinkContainer') moduleMenuLinkContainer: any;
  @ViewChild('moduleContentContainer') moduleContentContainer: any;

  currentOverlayMenu = 'kisah';

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (window.innerWidth <= 960) {
        this.moduleMenuLinkContainer.nativeElement.style = 'top: ' + window.innerHeight + 'px';
      } else {
        this.moduleMenuLinkContainer.nativeElement.style = '';
      }
    }, 500);
  }

  onOverlayMenuActivated(activated: boolean) {
    if (!activated) {
      this.moduleMenuLinkContainer.nativeElement.className = 'moduleMenuLinkContainer';
      this.moduleTitleVertical.toggleHideComponent(false);
      this.moduleContentContainer.nativeElement.className = 'moduleContentContainer';
     } else {
      this.moduleMenuLinkContainer.nativeElement.className = 'moduleMenuLinkContainer hideContent';
      this.moduleTitleVertical.toggleHideComponent(true);
      this.moduleContentContainer.nativeElement.className = 'moduleContentContainer hideContent';
     }
  }

  onModuleMenuButtonClick() {
    if (this.moduleMenuLinkContainer.nativeElement.className === 'moduleMenuLinkContainer moduleMenuOpen') {
      this.moduleMenuLinkContainer.nativeElement.className = 'moduleMenuLinkContainer';
    } else {
      this.moduleMenuLinkContainer.nativeElement.className = 'moduleMenuLinkContainer moduleMenuOpen';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    setTimeout(() => {
      if (window.innerWidth <= 960) {
        this.moduleMenuLinkContainer.nativeElement.style = 'top: ' + window.innerHeight + 'px';
      } else {
        this.moduleMenuLinkContainer.nativeElement.style = '';
      }
    }, 500);
  }
}
