import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  title = 'Tour of Heroes';
  //heronames = [];

  //constructor(private dataService: DataService) { }
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    /*this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.heronames = data;
    })  */
  }


  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
