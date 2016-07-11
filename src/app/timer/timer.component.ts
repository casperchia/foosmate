import { Component } from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {Player} from "../../models/player.model";
import {CountdownPipe} from "../../pipes/countdown.pipe";
import config from "../config";

@Component({
   selector: 'timer',
   providers: [],
   directives: [],
   pipes: [CountdownPipe],
   styles: [require('./timer.component.css')],
   template: require('./timer.component.html')
})

export class TimerComponent {
   player1: Player;
   player2: Player;
   seconds: number = config.GAME_DURATION;
   intervalId;
   
   constructor(private playerService: PlayerService){}

   ngOnInit(){
      this.player1 = this.playerService.getPlayer1();
      this.player2 = this.playerService.getPlayer2();
      this.startTimer();
   }
   
   startTimer(){
      this.intervalId = setInterval(()=>{
         if(this.seconds > 0){
            this.seconds--;
         }else{
            this.stopTimer();
         }
      }, 1000)
   }

   stopTimer(){
      clearInterval(this.intervalId);
   }
   
}
