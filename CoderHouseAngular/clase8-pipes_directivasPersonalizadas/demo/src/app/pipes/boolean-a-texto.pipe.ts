import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanATexto'
})
export class BooleanATextoPipe implements PipeTransform {

  transform(value: boolean, ...args: string[]): string {
    // console.log("Value:",value);
    // console.log("args:",args);
    return value?args[0]:args[1];
  }
}
