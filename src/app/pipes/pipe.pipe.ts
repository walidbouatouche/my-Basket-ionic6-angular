import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberx2'
})
export class PipePipe implements PipeTransform {

  transform(value: number): number {
    return value *2 ;
  }

}
