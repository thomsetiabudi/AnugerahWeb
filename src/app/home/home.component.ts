import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('menuButton') menuButton: any;
  @ViewChild('logoAndMenuContainer') logoAndMenuContainer: any;
  @ViewChild('mainContentContainer') mainContentContainer: any;
  @ViewChild('homeMenuLinkContainer') homeMenuLinkContainer: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (window.innerWidth <= 960) {
        const topValue = Math.round(window.innerHeight * 0.75);
        const heightValue = window.innerHeight - topValue;
        this.homeMenuLinkContainer.nativeElement.style = 'top: ' + topValue + 'px; height: ' + heightValue + 'px;';
      } else {
        this.homeMenuLinkContainer.nativeElement.style = '';
      }
    }, 500);
  }

  onMenuButtonClick() {
    if (this.menuButton.nativeElement.className === 'menuButton menuButtonOpen') {
      this.menuButton.nativeElement.className = 'menuButton';
      this.logoAndMenuContainer.nativeElement.className = 'logoAndMenu';
      this.mainContentContainer.nativeElement.className = 'mainContentContainer';
      this.homeMenuLinkContainer.nativeElement.className = 'homeMenuLinkContainer';
    } else {
      this.menuButton.nativeElement.className = 'menuButton menuButtonOpen';
      this.logoAndMenuContainer.nativeElement.className = 'logoAndMenu navMenuOpen';
      this.mainContentContainer.nativeElement.className = 'mainContentContainer hideContent';
      this.homeMenuLinkContainer.nativeElement.className = 'homeMenuLinkContainer hideContent';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event != null) {
      resizeCounter = 0;
    }

    setTimeout(() => {
      if (window.innerWidth <= 960) {
        const topValue = Math.round(window.innerHeight * 0.75);
        const heightValue = window.innerHeight - topValue;
        this.homeMenuLinkContainer.nativeElement.style = 'top: ' + topValue + 'px; height: ' + heightValue + 'px;';
        this.homeMenuLinkContainer.nativeElement.style.width = window.innerWidth + 'px';
      } else {
        this.homeMenuLinkContainer.nativeElement.style = '';
        this.homeMenuLinkContainer.nativeElement.style.width = '';
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
