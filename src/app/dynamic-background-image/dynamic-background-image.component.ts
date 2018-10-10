import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dynamic-background-image',
  templateUrl: './dynamic-background-image.component.html',
  styleUrls: ['./dynamic-background-image.component.scss']
})
export class DynamicBackgroundImageComponent implements OnInit, AfterViewInit {
  @ViewChild('backgroundImage1') backgroundImage1: any;
  @ViewChild('backgroundImage2') backgroundImage2: any;
  @ViewChild('backgroundImageScreen') backgroundImageScreen: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (window.innerWidth <= 960) {
        const topValue = Math.round(window.innerHeight * 0.75);
        const heightValue = window.innerHeight - topValue;
        this.backgroundImage1.nativeElement.style.height = window.innerHeight + 'px';
        this.backgroundImage1.nativeElement.style.width = window.innerWidth + 'px';
        this.backgroundImage2.nativeElement.style.height = window.innerHeight + 'px';
        this.backgroundImage2.nativeElement.style.width = window.innerWidth + 'px';
        this.backgroundImageScreen.nativeElement.style.height = window.innerHeight + 'px';
        this.backgroundImageScreen.nativeElement.style.width = window.innerWidth + 'px';
      } else {
        this.backgroundImage1.nativeElement.style.height = '';
        this.backgroundImage1.nativeElement.style.width = '';
        this.backgroundImage2.nativeElement.style.height = '';
        this.backgroundImage2.nativeElement.style.width = '';
        this.backgroundImageScreen.nativeElement.style.height = '';
        this.backgroundImageScreen.nativeElement.style.width = '';
      }

      backgroundImageList = this.shuffle(backgroundImageList);
      firstLoad = true;

      const backgroundImageObject = new Array();
      backgroundImageObject.push(this.backgroundImage1);
      backgroundImageObject.push(this.backgroundImage2);
      this.setBackgroundImage(backgroundImageObject);
      setInterval(this.setBackgroundImage, 7000, backgroundImageObject);
    }, 500);
  }

  setBackgroundImage(backgroundImageObject) {
    if (firstLoad) {
      const firstHeight = backgroundImageObject[0].nativeElement.style.height;
      const firstWidth = backgroundImageObject[0].nativeElement.style.width;
      const secondHeight = backgroundImageObject[1].nativeElement.style.height;
      const secondWidth = backgroundImageObject[1].nativeElement.style.width;
      backgroundImageObject[0].nativeElement.style = 'background-image: url(' + backgroundImageList[backgroundImageIndex] + ');';
      backgroundImageObject[0].nativeElement.style.height = firstHeight;
      backgroundImageObject[0].nativeElement.style.width = firstWidth;
      backgroundImageObject[1].nativeElement.style = 'background-image: url(' + backgroundImageList[backgroundImageIndex + 1] + ');';
      backgroundImageObject[1].nativeElement.style.height = secondHeight;
      backgroundImageObject[1].nativeElement.style.width = secondWidth;
      backgroundImageIndex = backgroundImageIndex + 2;
      firstLoad = false;
    } else {
      if (backgroundImageObject[0].nativeElement.className === 'bg-img-home fade-out') {
        backgroundImageObject[1].nativeElement.className = 'bg-img-home fade-out';
        backgroundImageObject[0].nativeElement.className = 'bg-img-home';
        setTimeout(function () {
          const secondHeight = backgroundImageObject[1].nativeElement.style.height;
          const secondWidth = backgroundImageObject[1].nativeElement.style.width;
          backgroundImageObject[1].nativeElement.style = 'background-image: url(' + backgroundImageList[backgroundImageIndex] + ');';
          backgroundImageObject[1].nativeElement.style.height = secondHeight;
          backgroundImageObject[1].nativeElement.style.width = secondWidth;

          backgroundImageIndex = backgroundImageIndex + 1;
          if (backgroundImageIndex >= backgroundImageList.length) {
            backgroundImageIndex = 0;
          }
        }, 2000);
      } else {
        backgroundImageObject[0].nativeElement.className = 'bg-img-home fade-out';
        backgroundImageObject[1].nativeElement.className = 'bg-img-home';
        setTimeout(function () {
          const firstHeight = backgroundImageObject[0].nativeElement.style.height;
          const firstWidth = backgroundImageObject[0].nativeElement.style.width;
          backgroundImageObject[0].nativeElement.style = 'background-image: url(' + backgroundImageList[backgroundImageIndex] + ');';
          backgroundImageObject[0].nativeElement.style.height = firstHeight;
          backgroundImageObject[0].nativeElement.style.width = firstWidth;

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

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event != null) {
      resizeCounter = 0;
    }

    setTimeout(() => {
      if (window.innerWidth <= 960) {
        const topValue = Math.round(window.innerHeight * 0.75);
        const heightValue = window.innerHeight - topValue;
        this.backgroundImage1.nativeElement.style.height = (window.innerHeight + 70) + 'px';
        this.backgroundImage1.nativeElement.style.width = window.innerWidth + 'px';
        this.backgroundImage2.nativeElement.style.height = (window.innerHeight + 70) + 'px';
        this.backgroundImage2.nativeElement.style.width = window.innerWidth + 'px';
        this.backgroundImageScreen.nativeElement.style.height = (window.innerHeight + 70) + 'px';
        this.backgroundImageScreen.nativeElement.style.width = window.innerWidth + 'px';
      } else {
        this.backgroundImage1.nativeElement.style.height = '';
        this.backgroundImage1.nativeElement.style.width = '';
        this.backgroundImage2.nativeElement.style.height = '';
        this.backgroundImage2.nativeElement.style.width = '';
        this.backgroundImageScreen.nativeElement.style.height = '';
        this.backgroundImageScreen.nativeElement.style.width = '';
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
