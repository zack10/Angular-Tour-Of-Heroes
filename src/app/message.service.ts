import { Injectable } from '@angular/core';

import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  heroClick(message: String, hero: Hero){
    this.messages.push(message +  " " + hero.name);
  }

  clear() {
    this.messages = [];
  }
}