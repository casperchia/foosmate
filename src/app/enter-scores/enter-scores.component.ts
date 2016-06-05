import { Component } from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {MatchService} from "../../services/match.service";
import {Player} from "../../models/player.model";
import {Match} from "../../models/match.model";

@Component({
   selector: 'enter-scores',
   providers: [],
   directives: [],
   pipes: [],
   styles: [require('./enter-scores.component.css')],
   template: require('./enter-scores.component.html')
})

export class EnterScoresComponent {
   player1: Player;
   player2: Player;
   match: Match;
   scoreRange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
   
   constructor(private playerService: PlayerService, private matchService: MatchService){}

   ngOnInit(){
      this.player1 = this.playerService.getPlayer1();
      this.player2 = this.playerService.getPlayer2();
      this.match = this.matchService.getMatch();
   }

   setPlayer1Score(score: number){
      this.match.player1.score = score;
   }

   setPlayer2Score(score: number){
      this.match.player2.score = score;
   }

}
