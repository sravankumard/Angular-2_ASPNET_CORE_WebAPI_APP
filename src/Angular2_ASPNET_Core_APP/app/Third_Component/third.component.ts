
import { Component } from '@angular/core';

@Component({
    selector: 'third-app',
    template: '<h1>This is {{ComponentNumber}}rd {{SampleText}}</h1>'
})
export class ThirdComponent
{

    ComponentNumber: number = 3;
    SampleText: string = "Component";

}
