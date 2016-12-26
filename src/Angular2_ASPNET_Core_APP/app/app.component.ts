
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular App</h1>
<div style="float:right;">
               <a routerLink="First">First</a> |
               <a routerLink="Second">Second</a> |
               <a routerLink="Third">Third</a> |
               <a routerLink="Fourth">Fourth</a> 
</div>
<br/>
<div>
<router-outlet></router-outlet>
</div>
`
})
export class AppComponent { }
