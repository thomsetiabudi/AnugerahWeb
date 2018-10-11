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
        (this.moduleMenuLinkContainer.nativeElement as HTMLElement).style.top = window.innerHeight + 'px';
      } else {
        (this.moduleMenuLinkContainer.nativeElement as HTMLElement).style.top = '';
      }
    }, 500);
  }

  onOverlayMenuActivated(activated: boolean) {
    if (!activated) {
      (this.moduleMenuLinkContainer.nativeElement as HTMLElement).className = 'moduleMenuLinkContainer';
      this.moduleTitleVertical.toggleHideComponent(false);
      (this.moduleContentContainer.nativeElement as HTMLElement).className = 'moduleContentContainer';
     } else {
      (this.moduleMenuLinkContainer.nativeElement as HTMLElement).className = 'moduleMenuLinkContainer hideContent';
      this.moduleTitleVertical.toggleHideComponent(true);
      (this.moduleContentContainer.nativeElement as HTMLElement).className = 'moduleContentContainer hideContent';
     }
  }

  onModuleMenuButtonClick() {
    if ((this.moduleMenuLinkContainer.nativeElement as HTMLElement).className === 'moduleMenuLinkContainer moduleMenuOpen') {
      (this.moduleMenuLinkContainer.nativeElement as HTMLElement).className = 'moduleMenuLinkContainer';
    } else {
      (this.moduleMenuLinkContainer.nativeElement as HTMLElement).className = 'moduleMenuLinkContainer moduleMenuOpen';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event != null) {
      resizeCounter = 0;
    }

    setTimeout(() => {
      if (window.innerWidth <= 960) {
        (this.moduleMenuLinkContainer.nativeElement as HTMLElement).style.top = window.innerHeight + 'px';
      } else {
        (this.moduleMenuLinkContainer.nativeElement as HTMLElement).style.top = '';
      }

      resizeCounter = resizeCounter + 1;
      if (resizeCounter < 15) {
        setTimeout(() => {
          this.onResize(null);
        }, 50);
      }
    }, 50);
  }
}

let resizeCounter = 0;
