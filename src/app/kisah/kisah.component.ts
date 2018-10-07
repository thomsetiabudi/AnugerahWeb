import { Component, OnInit, ViewChild, AfterViewInit, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-kisah',
  templateUrl: './kisah.component.html',
  styleUrls: ['./kisah.component.css']
})
export class KisahComponent implements OnInit, AfterViewInit {
  @ViewChild('backgroundImage1') backgroundImage1: any;
  @ViewChild('backgroundImage2') backgroundImage2: any;
  @ViewChild('backgroundImageScreen') backgroundImageScreen: any;
  @ViewChild('menuButton') menuButton: any;
  @ViewChild('logoAndMenuContainer') logoAndMenuContainer: any;
  @ViewChild('moduleTitleVertical') moduleTitleVertical: any;
  @ViewChild('moduleMenuLinkContainer') moduleMenuLinkContainer: any;
  @ViewChild('moduleContentContainer') moduleContentContainer: any;

  constructor(private renderer: Renderer2) {  }

  ngOnInit() {
    if (window.innerWidth <= 960) {
      this.moduleMenuLinkContainer.nativeElement.style = 'top: ' + window.innerHeight + 'px';
    } else {
      this.moduleMenuLinkContainer.nativeElement.style = '';
    }
  }

  ngAfterViewInit() {
    backgroundImageList = this.shuffle(backgroundImageList);
    firstLoad = true;

    const backgroundImageObject = new Array();
    backgroundImageObject.push(this.backgroundImage1);
    backgroundImageObject.push(this.backgroundImage2);
    this.setBackgroundImage(backgroundImageObject);
    setInterval(this.setBackgroundImage, 7000, backgroundImageObject);
  }

  setBackgroundImage(backgroundImageObject) {
    if (firstLoad) {
      backgroundImageObject[0].nativeElement.style = 'background-image: url(' + backgroundImageList[backgroundImageIndex] + ');';
      backgroundImageObject[1].nativeElement.style = 'background-image: url(' + backgroundImageList[backgroundImageIndex + 1] + ');';
      backgroundImageIndex = backgroundImageIndex + 2;
      firstLoad = false;
    } else {
      if (backgroundImageObject[0].nativeElement.className === 'bg-img-home fade-out') {
        backgroundImageObject[1].nativeElement.className = 'bg-img-home fade-out';
        backgroundImageObject[0].nativeElement.className = 'bg-img-home';
        setTimeout(function() {
          backgroundImageObject[1].nativeElement.style = 'background-image: url(' + backgroundImageList[backgroundImageIndex] + ');';

          backgroundImageIndex = backgroundImageIndex + 1;
          if (backgroundImageIndex >= backgroundImageList.length) {
            backgroundImageIndex = 0;
          }
        }, 2000);
      } else {
        backgroundImageObject[0].nativeElement.className = 'bg-img-home fade-out';
        backgroundImageObject[1].nativeElement.className = 'bg-img-home';
        setTimeout(function() {
          backgroundImageObject[0].nativeElement.style = 'background-image: url(' + backgroundImageList[backgroundImageIndex] + ');';

          backgroundImageIndex = backgroundImageIndex + 1;
          if (backgroundImageIndex >= backgroundImageList.length) {
            backgroundImageIndex = 0;
          }
        }, 2000);
      }
    }
  }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
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
    if (event.target.innerWidth <= 960) {
      this.moduleMenuLinkContainer.nativeElement.style = 'top: ' + event.target.innerHeight + 'px';
    } else {
      this.moduleMenuLinkContainer.nativeElement.style = '';
    }
  }
}

let firstLoad = true;
let backgroundImageIndex = 0;
let backgroundImageList = new Array();

backgroundImageList.push('/assets/img/pexels-photo.jpg');
backgroundImageList.push('/assets/img/pexels-photo-194096.jpeg');
backgroundImageList.push('/assets/img/pexels-photo-255379.jpeg');
backgroundImageList.push('/assets/img/pexels-photo-531880.jpeg');
backgroundImageList.push('/assets/img/pexels-photo-547114.jpeg');
backgroundImageList.push('/assets/img/pexels-photo-747964.jpeg');
backgroundImageList.push('/assets/img/pexels-photo-949587.jpeg');
backgroundImageList.push('/assets/img/pexels-photo-1169754.jpeg');
backgroundImageList.push('/assets/img/pexels-photo-1209658.jpeg');
