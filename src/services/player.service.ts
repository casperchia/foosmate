import {Injectable} from "@angular/core";
import {Player} from "../models/player.model";
import {Headers, Http} from "@angular/http";

@Injectable()
export class PlayerService{
   player1: Player;
   player2: Player;

   constructor(private http: Http){};

   getPlayers(){
      let url = 'http://localhost:4000/players';
      return this.http.get(url)
         .map(res => res.json());
   }

   setPlayer1(player1: Player){
      this.player1 = player1;
   }

   setPlayer2(player2: Player){
      this.player2 = player2;
   }

   getPlayer1(){
      return this.player1;
   }

   getPlayer2(){
      return this.player2;
   }

   savePlayer(player: Player){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let url = 'http://localhost:4000/players/savePlayer';
      return this.http.post(url, JSON.stringify(player), {headers: headers})
         .map(res => res.json());
   }

   addNewPlayer(name: string){
      let nameObject = {name: name};
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let url = 'http://localhost:4000/players/addPlayer';
      return this.http.post(url, JSON.stringify(nameObject), {headers: headers})
         .map(res => res.json());
   }

}
