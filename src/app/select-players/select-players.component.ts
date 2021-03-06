/**
 * Created by Casper on 04/06/2016.
 */
import {Component, OnInit} from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {Player} from "../../models/player.model";
import {Router} from "@angular/router-deprecated";
import {MatchService} from "../../services/match.service";
import {Match} from "../../models/match.model";
import {OrderByNamePipe} from "../../pipes/order-by-name.pipe";
import {PlayerCardSmallComponent} from "../player-card-small/player-card-small.component";
import {PlayerCardLargeComponent} from "../player-card-large/player-card-large.component";

@Component({
   selector: 'select-players',
   styles: [require('./select-players.component.css')],
   template: require('./select-players.component.html'),
   directives: [PlayerCardSmallComponent, PlayerCardLargeComponent],
   pipes: [OrderByNamePipe]
})

export class SelectPlayersComponent{
   players: Player[];
   player1: Player;
   player2: Player;
   match: Match;

   constructor(private playerService: PlayerService, private matchService: MatchService, private router: Router){}

   ngOnInit(){
      this.getPlayers();
      this.match = this.matchService.getMatch();
      if(this.match == null){
         this.router.navigate(['Home']);
      }
   }

   getPlayers(){
      // this.playerService.getPlayers().then(players =>this.players = players);
      this.playerService.getPlayers()
         .subscribe(
            players => {
               this.players = players;
            }
         )
   }
   
   // Add selected player to player1 or player2
   addPlayer(player: Player){
      if(this.player1 == null){
         this.player1 = player;
      }else if(this.player1 != null && this.player2 == null){
         this.player2 = player;
      }
      this.removeItemFromList(player, this.players);
   }

   removeItemFromList(item: any, list: any[]){
      let index = list.indexOf(item);
      if(index > -1){
         list.splice(index, 1);
      }
   }

   removePlayer1(){
      if(this.player1){
         this.players.push(this.player1);
         this.player1 = null;
         // This is to trigger the orderByName pipe as it creates a new array
         this.players = this.players.slice();
      }
   }

   removePlayer2(){
      if(this.player2){
         this.players.push(this.player2);
         this.player2 = null;
         // This is to trigger the orderByName pipe as it creates a new array
         this.players = this.players.slice();
      }
   }
   
   nextPage(){
      this.playerService.setPlayer1(this.player1);
      this.playerService.setPlayer2(this.player2);
      this.match.player1.playerId = this.player1._id;
      this.match.player2.playerId = this.player2._id;
      this.matchService.updateMatch(this.match);
      this.router.navigate(['Timer']);
   }

}