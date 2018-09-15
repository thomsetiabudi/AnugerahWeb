import { Component, OnInit, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer1') videoplayer1: any;
  @ViewChild('videoPlayer2') videoplayer2: any;

  constructor(private renderer: Renderer2) {  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.backgroundVideo();
  }

  backgroundVideo() {
    playlist = this.shuffle(playlist);

    videoSource1.setAttribute('type', 'video/mp4');
    videoSource1.setAttribute('src', playlist[videoIndex]);
    this.renderer.appendChild(this.videoplayer1.nativeElement, videoSource1);
    this.videoplayer1.nativeElement.className = 'bg-vid-home';
    this.videoplayer1.nativeElement.play();

    this.appendVideoIndex();

    videoSource2.setAttribute('type', 'video/mp4');
    videoSource2.setAttribute('src', playlist[videoIndex]);
    this.renderer.appendChild(this.videoplayer2.nativeElement, videoSource2);
    this.videoplayer2.nativeElement.className = 'bg-vid-home fade-out';

    this.appendVideoIndex();
  }

  videoTimeUpdate1() {
    this.videoTimeUpdate(this.videoplayer1, videoSource1, this.videoplayer2);
  }

  videoTimeUpdate2() {
    this.videoTimeUpdate(this.videoplayer2, videoSource2, this.videoplayer1);
  }

  videoTimeUpdate(videoPlayer, videoPlayerSource, otherVideoPlayer) {
    const timeFromVideoEnd = 2;
    const current = Math.round(videoPlayer.nativeElement.currentTime);
    const total = Math.round(videoPlayer.nativeElement.duration);
    const calc = total - current;

    if (calc < timeFromVideoEnd) {
      videoPlayer.nativeElement.className = 'bg-vid-home fade-out';
      otherVideoPlayer.nativeElement.className = 'bg-vid-home';
      otherVideoPlayer.nativeElement.play();

      videoPlayerSource.setAttribute('src', playlist[videoIndex]);
      videoPlayer.nativeElement.load();
      this.appendVideoIndex();
    }
  }

  appendVideoIndex() {
    videoIndex++;

    if (videoIndex >= playlist.length) {
      videoIndex = 0;
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

  startTime() {

    const today = new Date();
    const hh = today.getHours();
    let mm = today.getMinutes();
    const ddd = weekday[today.getDay()];
    const dd = today.getDate();
    const mmm = month[today.getMonth()];
    mm = this.checkTime(mm);
    document.getElementById('mainClockTime').innerHTML =
      hh + ':' + mm + '<br>' + ddd + ', ' + dd + ' ' + mmm;
    setTimeout(this.startTime, 1000);
  }

  checkTime(i) {
    if (i < 10) { i = '0' + i; }  // add zero in front of numbers < 10
    return i;
  }
}

let videoIndex = 0;
const videoSource1 = document.createElement('source');
const videoSource2 = document.createElement('source');
let playlist = new Array();

// playlist.push('http://nove.eu/wp-content/uploads/2017/10/Gettyimages-143-37-9-Sec-1.mp4');
// playlist.push('http://nove.eu/wp-content/uploads/2017/10/Gettyimages-486301322-8-Sec-12.mp4');
playlist.push('http://nove.eu/wp-content/uploads/2017/10/Gettyimages-181845693-Bis-9-Sec-7.mp4');
playlist.push('http://nove.eu/wp-content/uploads/2017/10/Gettyimages-469251376-9-Sec-8.mp4');
playlist.push('http://nove.eu/wp-content/uploads/2017/10/Gettyimages-477189311-10-Sec-10.mp4');
playlist.push('http://nove.eu/wp-content/uploads/2017/10/Gettyimages-486301322-8-Sec-12.mp4');
playlist.push('http://nove.eu/wp-content/uploads/2017/10/Gettyimages-495355643-10-Sec-13.mp4');
playlist.push('http://nove.eu/wp-content/uploads/2017/10/Gettyimages-510825148-9-Sec-14.mp4');
playlist.push('http://nove.eu/wp-content/uploads/2017/10/Gettyimages-516334150-6-Sec-15.mp4');
playlist.push('http://nove.eu/wp-content/uploads/2017/10/Gettyimages-681857134-9-Sec-17.mp4');
playlist.push('http://nove.eu/wp-content/uploads/2017/10/Gettyimages-143-37-9-Sec-1.mp4');
playlist.push('http://nove.eu/wp-content/uploads/2017/10/Gettyimages-145734322-9-Sec-2.mp4');
playlist.push('http://nove.eu/wp-content/uploads/2017/10/Gettyimages-162392035-6-Sec-3.mp4');
playlist.push('http://nove.eu/wp-content/uploads/2017/10/Gettyimages-168890703-9-Sec-4.mp4');

// clock
const weekday = new Array(7);
weekday[0] = 'Minggu';
weekday[1] = 'Senin';
weekday[2] = 'Selasa';
weekday[3] = 'Rabu';
weekday[4] = 'Kamis';
weekday[5] = 'Jumat';
weekday[6] = 'Sabtu';

const month = new Array(12);
month[0] = 'Januari';
month[1] = 'Februari';
month[2] = 'Maret';
month[3] = 'April';
month[4] = 'Mei';
month[5] = 'Juni';
month[6] = 'Juli';
month[7] = 'Agustus';
month[8] = 'September';
month[9] = 'Oktober';
month[10] = 'November';
month[11] = 'Desember';
