import { Component } from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {MatchService} from "../../services/match.service";
import {RatingService} from "../../services/rating.service";
import {Player} from "../../models/player.model";
import {Match} from "../../models/match.model";
import {Router} from "@angular/router-deprecated";
import {PlayerCardLargeComponent} from "../player-card-large/player-card-large.component";

@Component({
   selector: 'results',
   directives: [PlayerCardLargeComponent],
   pipes: [],
   styles: [require('./results.component.css')],
   template: require('./results.component.html')
})

export class ResultsComponent {
   player1: Player;
   player2: Player;
   match: Match;

   constructor(private playerService: PlayerService, private matchService: MatchService, private ratingService: RatingService, private router: Router){}

   ngOnInit(){
      this.player1 = this.playerService.getPlayer1();
      this.player2 = this.playerService.getPlayer2();
      this.match = this.matchService.getMatch();
      if(!this.player1 || !this.player2 || !this.match){
         this.router.navigate(['Home']);
      }
   }
   
}
