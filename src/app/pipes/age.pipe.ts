import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): number {
    let dobYear = new Date(value).getFullYear();
    let currentYear = new Date().getFullYear();
    return currentYear-dobYear;
  }

}
