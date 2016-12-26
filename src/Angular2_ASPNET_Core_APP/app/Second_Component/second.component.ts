

import { Component } from '@angular/core';

import { HeroService } from '../Services/sampleservice.service';
import { ISampleservice } from '../Services/Isampleservice';


@Component({
    selector: 'second-app',
    template: `<h1>This is Second Component</h1>

                <h2>{{Title}}</h2>

                <h3><ul>
  <li *ngFor="let item of Details; let i = index">
    {{i}} {{item.ID}} {{item.FirstName}} {{item.LastName}}
  </li>
</ul></h3>              `,
    providers: [HeroService]

    
})
export class SecondComponent {
    Title: string;
    Details: ISampleservice[];

    constructor(private _Sampleservice: HeroService)
    {
        this.Title = this._Sampleservice.someMethod();
        

    }

}
