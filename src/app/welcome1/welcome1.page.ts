import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-welcome1',
  templateUrl: './welcome1.page.html',
  styleUrls: ['./welcome1.page.scss'],
})
export class Welcome1Page implements OnInit {

  constructor(public navigator: NavigationService, private router: Router) { }

  ngOnInit() {
  }
}
