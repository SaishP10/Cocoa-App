import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.page.html',
  styleUrls: ['./content-page.page.scss'],
})
export class ContentPagePage implements OnInit, AfterViewInit {

  id = 0;
  category = '';
  content = {
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
      this.category = params.cid;
      this.content = this.database.getPage(params.cid, params.wid);
      console.log('Content page got: ' + params.cid + ', and: ' + params.wid + '.');
    });
  }

  ngAfterViewInit(): void {
    console.log(this);
  }
}
