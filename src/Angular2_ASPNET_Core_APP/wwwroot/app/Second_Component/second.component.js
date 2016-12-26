"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var sampleservice_service_1 = require('../Services/sampleservice.service');
var SecondComponent = (function () {
    function SecondComponent(_Sampleservice) {
        this._Sampleservice = _Sampleservice;
        this.Title = this._Sampleservice.someMethod();
    }
    SecondComponent = __decorate([
        core_1.Component({
            selector: 'second-app',
            template: "<h1>This is Second Component</h1>\n\n                <h2>{{Title}}</h2>\n\n                <h3><ul>\n  <li *ngFor=\"let item of Details; let i = index\">\n    {{i}} {{item.ID}} {{item.FirstName}} {{item.LastName}}\n  </li>\n</ul></h3>              ",
            providers: [sampleservice_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [sampleservice_service_1.HeroService])
    ], SecondComponent);
    return SecondComponent;
}());
exports.SecondComponent = SecondComponent;
//# sourceMappingURL=second.component.js.map