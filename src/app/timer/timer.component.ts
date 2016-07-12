import { Component, OnDestroy } from '@angular/core';
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

export class TimerComponent implements OnDestroy{
   player1: Player;
   player2: Player;
   seconds: number = config.GAME_DURATION;
   intervalId;
   flash: boolean = false;
   
   constructor(private playerService: PlayerService){}

   ngOnInit(){
      this.player1 = this.playerService.getPlayer1();
      this.player2 = this.playerService.getPlayer2();
      this.startTimer();
   }

   ngOnDestroy(){
      this.stopTimer();
   }
   
   startTimer(){
      this.intervalId = setInterval(()=>{
         if(this.seconds > 0){
            this.seconds--;
         }

         if(this.seconds == 0){
            this.stopTimer();
            this.playBuzzer();
         }

         if(this.seconds <= 10){
            if(this.seconds % 2 == 0){
               this.flash = true;
            }else{
               this.flash = false;
            }
         }
      }, 1000)
   }

   stopTimer(){
      clearInterval(this.intervalId);
   }

   playBuzzer(){
      let gday = <HTMLAudioElement>document.getElementById("buzzer");
      gday.play();
   }
}
