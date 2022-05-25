import { Injectable } from '@angular/core';
import { database } from './db';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  getWelcomes() {
    return database.pages.welcomes;
  }

  getPests() {
    return database.pages.pests;
  }

  getCategory(category) {
    return database.pages[category];
  }

  getPage(category, id) {
    let index = id - 1;
    return database.pages[category][index];
  }
}
