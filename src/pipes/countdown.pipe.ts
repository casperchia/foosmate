import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'countdown'})
export class CountdownPipe implements PipeTransform {
   transform(seconds: number): string {
      let min: number = Math.floor(seconds / 60);
      let sec: number = seconds % 60;
      // Add 0 as left padding to seconds if less than 2 digits
      let secString = ("0" + sec).slice(-2);
      return min.toString() + ':' + secString;
   }
}