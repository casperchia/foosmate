import {Injectable} from "@angular/core";
import {Player} from "../models/player.model";
import {Headers, Http} from "@angular/http";

@Injectable()
export class PlayerService{
   player1: Player;
   player2: Player;
   API_URL = 'http://192.168.1.3:4000';
   constructor(private http: Http){};

   getPlayers(){
      let url = this.API_URL + '/players';
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
      let url = this.API_URL + '/players/savePlayer';
      return this.http.post(url, JSON.stringify(player), {headers: headers})
         .map(res => res.json());
   }

   addNewPlayer(name: string){
      let nameObject = {name: name};
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let url = this.API_URL + '/players/addPlayer';
      return this.http.post(url, JSON.stringify(nameObject), {headers: headers})
         .map(res => res.json());
   }

}
