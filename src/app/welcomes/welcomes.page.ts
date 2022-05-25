import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-welcomes',
  templateUrl: './welcomes.page.html',
  styleUrls: ['./welcomes.page.scss'],
})
export class WelcomesPage implements OnInit, AfterViewInit {

  id = 0;
  welcome = {
    id: 0,
    title: '',
    headline: '',
    content: '',
    feature: ''
  };

  constructor(public navigator: NavigationService, public database: DatabaseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( (params) => {
      this.id = params.wid;
      this.welcome = this.database.getPage('welcomes', params.wid);
    });
  }

  ngAfterViewInit(): void {
    console.log(this);
  }
}
