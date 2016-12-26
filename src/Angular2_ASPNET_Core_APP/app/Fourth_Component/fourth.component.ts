
import { Component } from '@angular/core';
import { ISampleservice } from '../Services/Isampleservice';
import { HeroService } from '../Services/sampleservice.service';



@Component({
    selector: 'fourth-app',
    templateUrl: './app/Fourth_Component/fourthcomponent.html',
    styles: ['h2 {color:green; }'],
    providers: [HeroService]
})
export class FourthComponent {

    errorMessage: string;
    heroes: ISampleservice[];
    mode = 'Observable';

    constructor(private heroService: HeroService) { }

    ngOnInit() { this.getHeroes(); }

    getHeroes() {
        this.heroService.getHeroes()
            .subscribe(
            heroes => this.heroes = heroes,
            error => this.errorMessage = <any>error);
    }

    //addHero(name: string) {
    //    if (!name) { return; }
    //    this.heroService.addHero(name)
    //        .subscribe(
    //        hero => this.heroes.push(hero),
    //        error => this.errorMessage = <any>error);
    //}
}
