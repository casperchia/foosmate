import {Injectable} from "@angular/core";
import {Player} from "../models/player.model";

@Injectable()
export class PlayerService{
   player1: Player;
   player2: Player;

   getPlayers(){
      // clone list
      let players = JSON.parse(JSON.stringify(PLAYERS));
      return Promise.resolve(players);
   }

   setPlayer1(player1: Player){
      this.player1 = player1;
   }

   setPlayer2(player2: Player){
      this.player2 = player2;
   }

   getPlayer1(){
      return this.player1;
   }

   getPlayer2(){
      return this.player2;
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