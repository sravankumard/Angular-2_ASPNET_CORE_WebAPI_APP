import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { ISampleservice } from './ISampleservice';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class HeroService {
    private heroesUrl = './app/sampledata.json';  // URL to web API

    constructor(private http: Http) { }

    someMethod()
    {
        return "test";
    }


    getBooksAndMovies() {
        return Observable.forkJoin(
            this.http.get('./app/books.json').map(this.extractData).catch(this.handleError),
            this.http.get('./app/movies.json').map(this.extractData).catch(this.handleError)
        );
    }


    getHeroes(): Observable<ISampleservice[]> {
        return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }


    getAPIData(): Observable<ISampleservice[]>
    {
        return this.http.get('api/Values')
           .map(res => res.json())
            .catch(this.handleError);
    }

    //getValues(): Observable<any[]> {
    //    return this.http.get('api/Values')
    //         .map(res => res.json())
    //        .catch(this.handleError);
    //}

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}