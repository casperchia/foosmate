import {Injectable} from "@angular/core";
import {Match} from "../models/match.model";
import {Player} from "../models/player.model";
import {Headers, Http} from "@angular/http";
import config from "../app/config"

class Mode{
   static RANKED = 'Ranked';
}

@Injectable()
export class MatchService{
   private currentMatch: Match;
   API_URL = config.API_URL;

   constructor(private http: Http){};

   createRankedMatch(){
      // TODO: need to save to db to get new id
      this.currentMatch = new Match();
      this.currentMatch.mode = Mode.RANKED;
   }

   updateScores(match: Match, p1Score: number, p2Score: number): Match{
      match.player1.score = p1Score;
      match.player2.score = p2Score;

      if(p1Score > p2Score){
         match.winnerId = match.player1.playerId;
      }else if(p1Score == p2Score){
         match.winnerId = null;
      }else{
         match.winnerId = match.player2.playerId;
      }

      return match;
   }

   getMatch(): Match{
      return this.currentMatch;
   }

   updateMatch(match: Match): Match{
      this.currentMatch = match;
      return this.currentMatch;
   }

   saveMatch(match: Match){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let url = this.API_URL + '/players/saveMatch';
      return this.http.post(url, JSON.stringify(match), {headers: headers})
          .map(res => res.json());   }

}

