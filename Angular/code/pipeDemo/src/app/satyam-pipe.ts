import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'satyam'
})
export class SatyamPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return  value.toUpperCase();
  }

}
