/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';
import { HomeComponent } from './home';
import {LeaderboardsComponent} from "./leaderboards";

/*
 * App Component
 * Top Level Component
 */
@Component({
   selector: 'app',
   pipes: [],
   providers: [],
   directives: [],
   encapsulation: ViewEncapsulation.None,
   styles: [require('./app.css')],
   template: require('./app.component.html')
})
//noinspection TypeScriptValidateTypes
@RouteConfig([
   {
      path: '/',
      name: 'Home',
      component: HomeComponent,
      useAsDefault: true
   },
   {
      path: '/leaderboards',
      name: 'Leaderboards',
      component: LeaderboardsComponent
   }
])
export class App {
   name = 'Foosmate';

   constructor() {
   }

}
