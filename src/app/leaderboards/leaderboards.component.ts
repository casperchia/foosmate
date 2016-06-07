/**
 * Created by Casper on 03/06/2016.
 */
import { Component } from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {Player} from "../../models/player.model";
import {OrderByRankPipe} from "../../pipes/order-by-rank.pipe";

@Component({
   selector: 'leaderboards',
   styles: [require('./leaderboards.component.css')],
   template: require('./leaderboards.component.html'),
   pipes: [OrderByRankPipe]
})

export class LeaderboardsComponent{
   players: Player[];

   constructor(private playerService: PlayerService){}

   ngOnInit(){
      this.playerService.getPlayers().subscribe(
         players => this.players = players
      )
   }

}