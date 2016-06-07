import { Component } from '@angular/core';
import {MatchService} from "../../services/match.service";
import {Router} from "@angular/router-deprecated";

@Component({
   selector: 'home',
   directives: [],
   pipes: [],
   styles: [require('./home.component.css')],
   template: require('./home.component.html')
})

export class HomeComponent {

   constructor(private router: Router, private matchService: MatchService){}

   ngOnInit(){

   }

   playRankedMatch(){
      this.matchService.createRankedMatch();
      this.router.navigate(['SelectPlayers']);
   }

   addNewPlayer(){
      this.router.navigate(['AddNewPlayer']);
   }
   
}
