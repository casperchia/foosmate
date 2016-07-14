import {Injectable} from "@angular/core";

@Injectable()
export class RatingService{
   private p1NewRating: number;
   private p2NewRating: number;
   private p1RatingChange: number;
   private p2RatingChange: number;

   calculateRating(rating1: number, rating2: number, score1: number, score2: number){
      let K = 50;
      let T1 = Math.pow(10, rating1/400);
      let T2 = Math.pow(10, rating2/400);

      let E1 = T1 / (T1 + T2);

      let S1;
      if(score1 > score2){
         S1 = 1;
      }else if(score1 == score2){
         S1 = 0.5;
      }else{
         S1 = 0;
      }

      let D1 = Math.round(K * (S1 - E1));
      let D2 = -D1;

      let R1 = rating1 + D1;
      let R2 = rating2 + D2;

      this.p1RatingChange = D1;
      this.p2RatingChange = D2;
      this.p1NewRating = R1;
      this.p2NewRating = R2;
   }

   getP1NewRating(){
      return this.p1NewRating;
   }

   getP2NewRating(){
      return this.p2NewRating;
   }

   getP1RatingChange(){
      return this.p1RatingChange;
   }

   getP2RatingChange(){
      return this.p2RatingChange;
   }
}

