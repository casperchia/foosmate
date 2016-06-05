import {Injectable} from "@angular/core";
import {Match} from "../models/match.model";

class Mode{
   static RANKED = 'Ranked';
}

@Injectable()
export class MatchService{
   currentMatch: Match;

   createRankedMatch(){
      // TODO: need to save to db to get new id
      this.currentMatch = new Match();
      this.currentMatch.mode = Mode.RANKED;
   }

   getMatch(){
      return this.currentMatch;
   }

}

