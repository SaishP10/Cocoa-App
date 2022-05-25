import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'splash.page.html',
  styleUrls: ['splash.page.scss'],
})
export class SplashPage implements AfterViewInit {

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.navigateTo('/home/');
    }, 3000);
  }

  navigateTo(link) {
    this.router.navigate([link]);
  }

}
