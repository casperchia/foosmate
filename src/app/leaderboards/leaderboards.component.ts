/**
 * Created by Casper on 03/06/2016.
 */
import { Component } from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {Player} from "../../models/player.model";
import {OrderByRankPipe} from "../../pipes/order-by-rank.pipe";
import config from "../config";

@Component({
   selector: 'leaderboards',
   styles: [require('./leaderboards.component.css')],
   template: require('./leaderboards.component.html'),
   pipes: [OrderByRankPipe]
})

export class LeaderboardsComponent{
   PLACEMENT_GAMES_REQUIRED: number = config.PLACEMENT_GAMES_REQUIRED;
   players: Player[];
   activePlayers: Player[];
   inactivePlayers: Player[];

   constructor(private playerService: PlayerService){}

   ngOnInit(){
      this.playerService.getPlayers().subscribe(
         players => this.initPlayerLists(players)
      )
   }

   initPlayerLists(players: Player[]){
      this.activePlayers = [];
      this.inactivePlayers = [];

      for(let player of players){
         if(player.rankedMatches.length <= this.PLACEMENT_GAMES_REQUIRED){
            this.inactivePlayers.push(player);
         }else{
            this.activePlayers.push(player);
         }
      }

   }

}