import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  //selectedHero: Hero; removes dead code
  
  //inject this : (private messageService: MessageService) Here
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  /**** 
   * @Removing dead code
   */
  /*onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.heroClick("Displaying hero:", hero);
  }*/

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}