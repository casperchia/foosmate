import { Component } from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {MatchService} from "../../services/match.service";
import {Player} from "../../models/player.model";
import {Match} from "../../models/match.model";
import {Router} from "@angular/router-deprecated";
import {RatingService} from "../../services/rating.service";
import {PlayerCardLargeComponent} from "../player-card-large/player-card-large.component";

@Component({
   selector: 'enter-scores',
   providers: [],
   directives: [PlayerCardLargeComponent],
   pipes: [],
   styles: [require('./enter-scores.component.css')],
   template: require('./enter-scores.component.html')
})

export class EnterScoresComponent {
   player1: Player;
   player2: Player;
   p1Score: number = 0;
   p2Score: number = 0;
   match: Match;
   scoreRange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   
   constructor(private playerService: PlayerService, private matchService: MatchService, private ratingService: RatingService, private router: Router){}

   ngOnInit(){
      this.player1 = this.playerService.getPlayer1();
      this.player2 = this.playerService.getPlayer2();
      this.match = this.matchService.getMatch();
      if(!this.match){
         this.router.navigate(['Home']);
      }
   }

   setPlayer1Score(score: number){
      this.p1Score = score;
   }

   setPlayer2Score(score: number){
      this.p2Score = score;
   }
   
   nextPage(){
      this.match = this.matchService.updateScores(this.match, this.p1Score, this.p2Score);
      this.ratingService.calculateRating(this.player1.rating, this.player2.rating, this.p1Score, this.p2Score);
      this.player1.rating = this.ratingService.getP1NewRating();
      this.player2.rating = this.ratingService.getP2NewRating();
      this.player1.rankedMatches.push(this.match.id);
      this.player2.rankedMatches.push(this.match.id);
      this.playerService.savePlayer(this.player1).subscribe(res => console.log(res));
      this.playerService.savePlayer(this.player2).subscribe(res => console.log(res));
      this.matchService.saveMatch(this.match);
      this.router.navigate(['Results']);
   }

}
