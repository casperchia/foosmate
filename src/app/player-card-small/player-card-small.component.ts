import {Component, Input} from "@angular/core";
import {Player} from "../../models/player.model";

@Component({
   selector: 'player-card-small',
   styles: [require('./player-card-small.component.css')],
   template: require('./player-card-small.component.html'),
})

export class PlayerCardSmallComponent{
   @Input() player: Player;

   constructor(){}
}