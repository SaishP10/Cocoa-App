import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-bougainville-cocoa',
  templateUrl: './bougainville-cocoa.page.html',
  styleUrls: ['./bougainville-cocoa.page.scss'],
})
export class BougainvilleCocoaPage implements OnInit {

  constructor(public navigator: NavigationService) { }

  ngOnInit() {
  }

}
