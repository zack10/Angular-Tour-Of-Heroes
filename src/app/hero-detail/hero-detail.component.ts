import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { faCheckSquare, faCheckCircle, faBackward, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  faCheckSquare = faCheckSquare;
  faCheckCircle = faCheckCircle;
  faBackward = faBackward;
  faChevronCircleLeft = faChevronCircleLeft;
  @Input() hero: Hero;
  returnedHero: string;
  // hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // the (+) operator converts a string to a number
    this.heroService.getHero(id)
      .subscribe(hero => {
        this.returnedHero = hero.name;
        this.hero = hero;
      });
  }

  save(): void {
    if (this.hero.name !== this.returnedHero) {
      this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

}
