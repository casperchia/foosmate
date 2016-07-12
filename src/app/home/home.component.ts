import { Component } from '@angular/core';
import {MatchService} from "../../services/match.service";
import {Router} from "@angular/router-deprecated";
import {PlayerService} from "../../services/player.service";

@Component({
   selector: 'home',
   directives: [],
   pipes: [],
   styles: [require('./home.component.css')],
   template: require('./home.component.html')
})

export class HomeComponent {

   constructor(private router: Router, private playerService: PlayerService, private matchService: MatchService){}

   ngOnInit(){
      this.playerService.setPlayer1(null);
      this.playerService.setPlayer2(null);
   }

   playRankedMatch(){
      this.playAudio();
      this.matchService.createRankedMatch();
      this.router.navigate(['SelectPlayers']);
   }

   addNewPlayer(){
      this.router.navigate(['AddNewPlayer']);
   }

   startTimer(){
      this.router.navigate(['Timer']);
   }

   playAudio(){
      let gday = <HTMLAudioElement>document.getElementById("gday");
      gday.play();
   }

}
