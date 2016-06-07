import { Component } from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {Router} from "@angular/router-deprecated";

@Component({
   selector: 'add-new-player',
   styles: [require('./add-new-player.component.css')],
   template: require('./add-new-player.component.html'),
})

export class AddNewPlayerComponent{
   name: string;
   errorMessage: string;
   
   constructor(private playerService: PlayerService, private router: Router){}
   
   addNewPlayer(name: string){
      this.playerService.addNewPlayer(name)
         .subscribe(
            player => {
               console.log(player);
               this.router.navigate(['Home']);
            },
            err => this.errorMessage = err.text()
         )
   }

   clearErrorMessage(){
      this.errorMessage = '';
   }
}