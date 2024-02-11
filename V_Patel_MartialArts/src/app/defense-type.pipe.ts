import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defenseType',
  standalone: true
})
export class DefenseTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
