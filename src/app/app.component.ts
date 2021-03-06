/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';
import { HomeComponent } from './home';
import {LeaderboardsComponent} from "./leaderboards";
import {SelectPlayersComponent} from "./select-players/select-players.component";
import {TimerComponent} from "./timer/timer.component";
import {EnterScoresComponent} from "./enter-scores/enter-scores.component";
import {ResultsComponent} from "./results/results.component";
import {PlayerService} from "../services/player.service";
import {MatchService} from "../services/match.service";
import {RatingService} from "../services/rating.service";
import {AddNewPlayerComponent} from "./add-new-player/add-new-player.component";

/*
 * App Component
 * Top Level Component
 */
@Component({
   selector: 'app',
   pipes: [],
   providers: [PlayerService, MatchService, RatingService],
   directives: [],
   encapsulation: ViewEncapsulation.None,
   styles: [require('./app.component.css')],
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
   },
   {
      path: '/select-players',
      name: 'SelectPlayers',
      component: SelectPlayersComponent
   },
   {
      path: '/timer',
      name: 'Timer',
      component: TimerComponent
   },
   {
      path: '/enter-scores',
      name: 'EnterScores',
      component: EnterScoresComponent
   },
   {
      path: '/results',
      name: 'Results',
      component: ResultsComponent
   },
   {
      path: '/add-new-player',
      name: 'AddNewPlayer',
      component: AddNewPlayerComponent
   }
])
export class App {
   name = 'Foosmate';

   constructor() {
   }

}
