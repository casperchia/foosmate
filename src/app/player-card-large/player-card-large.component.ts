import {Component, Input} from "@angular/core";
import {Player} from "../../models/player.model";

@Component({
   selector: 'player-card-large',
   styles: [require('./player-card-large.component.css')],
   template: require('./player-card-large.component.html'),
})

export class PlayerCardLargeComponent{
   @Input() player: Player;

   constructor(){}
}