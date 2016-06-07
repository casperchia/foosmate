import { Pipe, PipeTransform } from '@angular/core';
import {Player} from "../models/player.model";

@Pipe({name: 'orderByName'})
export class OrderByNamePipe implements PipeTransform {
   transform(players: Player[]): Player[] {
      players.sort(
         (p1, p2) => {
            if(p1.name.toLowerCase() < p2.name.toLowerCase()){
               return -1;
            }else if(p1.name.toLowerCase() > p2.name.toLowerCase()){
               return 1;
            }else{
               return 0
            }
         }
      )
      return players;
   }
}