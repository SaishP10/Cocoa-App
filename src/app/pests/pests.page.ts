import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-pests',
  templateUrl: './pests.page.html',
  styleUrls: ['./pests.page.scss'],
})
export class PestsPage implements OnInit, AfterViewInit {

  id = 0;
  pest = {
    id: 0,
    title: '',
    headline: '',
    content: '',
    feature: '',
    audio: ''
  };

  constructor(public navigator: NavigationService, public database: DatabaseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( (params) => {
      this.id = params.wid;
      this.pest = this.database.getPage('pests', params.wid);
    });
  }

  ngAfterViewInit(): void {
    console.log(this);
  }
}
