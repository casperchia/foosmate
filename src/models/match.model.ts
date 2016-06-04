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
}