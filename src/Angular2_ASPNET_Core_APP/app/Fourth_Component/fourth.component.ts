
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
    data1: string;
    data2: string;
    heroes:ISampleservice[];
    public books:ISampleservice[];
    public movies: ISampleservice[];
    public samplevalues: Array<ISampleservice>=[];
    public stringvalues: any[];
    mode = 'Observable';

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
        this.getBooksAndMovies(); 
       this.getAPIData()
       
       // this.getValues();
    }

    //getHeroes() {
    //    this.heroService.getHeroes()
    //        .subscribe(
    //        hero =>this.heroes = hero,
    //        error => this.errorMessage = <any>error);
    //}

    getHeroes() {
        this.heroService.getHeroes().subscribe(data => this.heroes = data, error => this.errorMessage = <any>error);

    }

    //addHero(name: string) {
    //    if (!name) { return; }
    //    this.heroService.addHero(name)
    //        .subscribe(
    //        hero => this.heroes.push(hero),
    //        error => this.errorMessage = <any>error);
    //}

   

    getBooksAndMovies() {
        this.heroService.getBooksAndMovies().subscribe(
            data => {
                this.books = data[0]
                this.movies = data[1]
            }
        );
    }

    //getValues() {
    //    this.heroService.getValues().subscribe(
    //        data => this.stringvalues = data,
    //        error => this.errorMessage = <any>error);

    //}

    getAPIData() {
        this.heroService.getAPIData().subscribe(res => this.samplevalues = res,error => this.errorMessage = <any>error);         
        
    }

   

    
}

