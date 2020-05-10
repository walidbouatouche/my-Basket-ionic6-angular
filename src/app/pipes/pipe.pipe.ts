import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'numberx2'
})
// https://angular.io/guide/pipes
export class PipePipe implements PipeTransform {

  transform(value: number): number {
    return value * 2;
  }

}
