export class Match{
   id: string;
   player1: {
      playerId: string,
      score: number
   };
   player2: {
      playerId: string,
      score: number
   };
   datePlayed: Date;
   winnerId: string;
   mode: string;

   constructor(){
      this.player1 = {
         playerId: null,
         score: 0
      };
      this.player2 = {
         playerId: null,
         score: 0
      };
      this.datePlayed = new Date();
   }
}
