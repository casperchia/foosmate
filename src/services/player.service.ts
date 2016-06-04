import {Injectable} from "@angular/core";
import {Player} from "../models/player.model";

@Injectable()
export class PlayerService{

   getPlayers(){
      return Promise.resolve(PLAYERS);
   }
   
}

var PLAYERS: Player[] = [
   {
      id: '1',
      name: 'Casper',
      rating: 1000,
      leaguePoints: 0,
      rankedMatches: [],
      leagueMatches: [],
   },
   {
      id: '2',
      name: 'John',
      rating: 1000,
      leaguePoints: 0,
      rankedMatches: [],
      leagueMatches: [],
   },
   {
      id: '3',
      name: 'Snow',
      rating: 1000,
      leaguePoints: 0,
      rankedMatches: [],
      leagueMatches: [],
   },
   {
      id: '4',
      name: 'Tyrion',
      rating: 1000,
      leaguePoints: 0,
      rankedMatches: [],
      leagueMatches: [],
   },
   {
      id: '5',
      name: 'Jamie',
      rating: 1000,
      leaguePoints: 0,
      rankedMatches: [],
      leagueMatches: [],
   }
]