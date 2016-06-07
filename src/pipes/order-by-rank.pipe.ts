import { Pipe, PipeTransform } from '@angular/core';
import {Player} from "../models/player.model";

@Pipe({name: 'orderByRank'})
export class OrderByRankPipe implements PipeTransform {
   transform(players: Player[]): Player[] {
      players.sort(
         (p1, p2) => {
            return p2.rating - p1.rating;
         }
      )
      return players;
   }
}