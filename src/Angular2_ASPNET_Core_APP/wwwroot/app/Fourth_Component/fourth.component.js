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
var FourthComponent = (function () {
    function FourthComponent(heroService) {
        this.heroService = heroService;
        this.mode = 'Observable';
    }
    FourthComponent.prototype.ngOnInit = function () { this.getHeroes(); };
    FourthComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes; }, function (error) { return _this.errorMessage = error; });
    };
    FourthComponent = __decorate([
        core_1.Component({
            selector: 'fourth-app',
            templateUrl: './app/Fourth_Component/fourthcomponent.html',
            styles: ['h2 {color:green; }'],
            providers: [sampleservice_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [sampleservice_service_1.HeroService])
    ], FourthComponent);
    return FourthComponent;
}());
exports.FourthComponent = FourthComponent;
//# sourceMappingURL=fourth.component.js.map