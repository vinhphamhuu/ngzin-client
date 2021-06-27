import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  playerData: any = {};
  rxTime = new Date();
  subscription: Subscription = new Subscription;

  constructor() { }

  ngOnInit() {
    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      ).subscribe(time => {
        this.rxTime = time;
    });
    const imgPath = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2940219/';
    this.playerData = {
      left: [
        { username: 'NIOMEEEE', kills: 1590, deaths: 518, playHours: 23, playMinutes: 52, image: imgPath+'U3.jpg' },
        { username: 'TACOSONTITAN', kills: 19308, deaths: 8159, playHours: 182, playMinutes: 11, image: imgPath+'default.png' },
        { username: 'TICOTACO', kills: 23091, deaths: 8331, playHours: 189, playMinutes: 43, image: imgPath+'U4.jpg' },
        { username: 'NICE_GUNS', kills: 431, deaths: 295, playHours: 6, playMinutes: 59, image: imgPath+'DefaultUser.jpg' },
        { username: 'LIMANOT', kills: 145, deaths: 140, playHours: 3, playMinutes: 19, image: imgPath+'DefaultUser.jpg' },
        { username: 'RAGEQUITTER', kills: 1892, deaths: 831, playHours: 5, playMinutes: 31, image: imgPath+'U6.jpg' },
        { username: 'MONSTER_SANDWICH', kills: 9839, deaths: 958, playHours: 8, playMinutes: 22, image: imgPath+'U5.jpg' },
        { username: 'ALI_NUMNUMS', kills: 12, deaths: 72, playHours: 1, playMinutes: 28, image: imgPath+'DefaultUser.jpg' },
      ],
      right: [
        { username: 'RAVENHATER', kills: 15301, deaths: 9851, playHours: 201, playMinutes: 45, image: imgPath+'U1.jpg' },
        { username: 'MARSMALLOS', kills: 14998, deaths: 7590, playHours: 150, playMinutes: 34, image: imgPath+'U2.png' },
        { username: 'CURBSTOMP', kills: 15, deaths: 5, playHours: 3, playMinutes: 51, image: imgPath+'DefaultUser.jpg' },
        { username: 'FANSONFANS', kills: 108, deaths: 98, playHours: 5, playMinutes: 17, image: imgPath+'DefaultUser.jpg' },
        { username: 'SWIPE_RIGHT', kills: 905, deaths: 309, playHours: 12, playMinutes: 35, image: imgPath+'U9.jpg' },
        { username: 'SK1TTL3S', kills: 99, deaths: 56, playHours: 13, playMinutes: 32, image: imgPath+'U7.jpg' },
        { username: 'HURLEY_GIRL', kills: 3, deaths: 32, playHours: 0, playMinutes: 25, image: imgPath+'DefaultUser.jpg' },
        { username: 'R4MP4G3', kills: 52938, deaths: 14921, playHours: 205, playMinutes: 13, image: imgPath+'U8.png' }
      ]
    }
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  loadingLogo() {
    var progressImage: any = {};
    progressImage = document.getElementById("loading-image");
    console.log(progressImage);
    
    progressImage.dataset.progress = 0;
    progressImage.style.clipPath = 'inset(100% 0 0 0)';
    progressImage.style.webkitClipPath = 'inset(100% 0 0 0)';
    var progressInterval = setInterval(() => {
      let oldProgress = parseInt(progressImage.dataset.progress);
      let newProgress = Math.floor((Math.random() * 5) + 1) / 5;
      let progress = oldProgress + newProgress;
      progressImage.dataset.progress = progress;
      progressImage.style.clipPath = 'inset(' + (100 - progress) + '% 0 0 0)';
      progressImage.style.webkitClipPath = 'inset(' + (100 - progress) + '% 0 0 0)';
      if (progress >= 100) {
        progressImage.style.clipPath = 'inset(0 0 0 0)';
        progressImage.style.webkitClipPath = 'inset(0 0 0 0)';
        clearInterval(progressInterval);
      }
    }, 100);
  }
}
