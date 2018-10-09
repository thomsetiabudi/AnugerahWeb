import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-kisah',
  templateUrl: './kisah.component.html',
  styleUrls: ['./kisah.component.css']
})
export class KisahComponent implements OnInit, AfterViewInit {
  @ViewChild('menuButton') menuButton: any;
  @ViewChild('logoAndMenuContainer') logoAndMenuContainer: any;
  @ViewChild('moduleTitleVertical') moduleTitleVertical: any;
  @ViewChild('moduleMenuLinkContainer') moduleMenuLinkContainer: any;
  @ViewChild('moduleContentContainer') moduleContentContainer: any;

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

  onMenuButtonClick() {
    if (this.menuButton.nativeElement.className === 'menuButton menuButtonOpen') {
      this.menuButton.nativeElement.className = 'menuButton';
      this.logoAndMenuContainer.nativeElement.className = 'logoAndMenu';
      this.moduleMenuLinkContainer.nativeElement.className = 'moduleMenuLinkContainer';
      this.moduleTitleVertical.nativeElement.className = 'moduleTitleVertical';
      this.moduleContentContainer.nativeElement.className = 'moduleContentContainer';
    } else {
      this.menuButton.nativeElement.className = 'menuButton menuButtonOpen';
      this.logoAndMenuContainer.nativeElement.className = 'logoAndMenu navMenuOpen';
      this.moduleMenuLinkContainer.nativeElement.className = 'moduleMenuLinkContainer hideContent';
      this.moduleTitleVertical.nativeElement.className = 'moduleTitleVertical hideContent';
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
