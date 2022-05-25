import { Component, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ViewDidEnter } from '@ionic/angular';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements ViewDidEnter {

  navLinks = [
    {
      title: 'Welcomes',
      feature: '/assets/clean-imagery/clean-imagery.png',
      category: 'welcomes',
      link: '',
      toggled: false,
      children: []
    },
    {
      title: 'Bougainville Cocoa',
      feature: '/assets/cocoa/image-1.png',
      link: '/bougainville-cocoa/',
    },
    {
      title: 'Pests + Diseases',
      feature: '/assets/cocoa-pod-borer/cocoa-pod-borer.jpg',
      category: 'pests',
      link: '',
      toggled: false,
      children: []
    },
    {
      title: 'Nursery + Planting',
      feature: '/assets/nursery-establishment/image-1.jpg',
      category: 'nursery',
      link: '',
      toggled: false
    },
    {
      title: 'Management',
      feature: '/assets/managements/Image-1.PNG',
      category: 'management',
      link: '',
      toggled: false
    },
    {
      title: 'Healthy food for the family',
      feature: '/assets/what-is-a-healthy-diet/image-3.png',
      category: 'healthy',
      link: '',
      toggled: false
    },
    {
      title: 'Growers Guide',
      feature: '',
      category: 'growers',
      link: '',
      toggled: false
    },
    {
      title: 'Recipes',
      feature: '/assets/recipes/Kanivsa_oblast.jpeg',
      category: 'recipes',
      link: '',
      toggled: false
    },
    {
      title: 'Soils',
      feature: 'assets/bougainville-soil-types/bougainvaille-soil-types.png',
      category: 'soils',
      link: '',
      toggled: false
    },
    {
      title: 'Livestock',
      feature: '/assets/goats/image2.jpg',
      category: 'livestock',
      link: '',
      toggled: false
    },
    {
      title: 'Goats',
      feature: '/assets/goats/goats.jpg',
      category: 'goats',
      link: '',
      toggled: false
    },
    
    
  ];

  constructor(private router: Router, public database: DatabaseService) {
    this.navLinks[2].children = database.getPests();
    this.navLinks[0].children = database.getWelcomes();
    this.navLinks[3].children = database.getCategory(this.navLinks[3].category);
    this.navLinks[4].children = database.getCategory(this.navLinks[4].category);
    this.navLinks[5].children = database.getCategory(this.navLinks[5].category);
    this.navLinks[6].children = database.getCategory(this.navLinks[6].category);
    this.navLinks[7].children = database.getCategory(this.navLinks[7].category);
    this.navLinks[8].children = database.getCategory(this.navLinks[8].category);
    this.navLinks[9].children = database.getCategory(this.navLinks[9].category);
    this.navLinks[10].children = database.getCategory(this.navLinks[10].category);
  }

  ionViewDidEnter() {
    for (let navLink of this.navLinks) {
      navLink.toggled = false;
    }
  }

  navigateTo(link) {
    this.router.navigate([link]);
  }

  openPage(category, id) {
    this.router.navigate(['/' + category + '/' + id]);
  }

  openContentPage(category, id) {
    this.router.navigate(['/content/' + category + '/' + id]);
  }

  toggleNavbar(index) {
    this.navLinks[index].toggled = !this.navLinks[index].toggled;
  }

}
