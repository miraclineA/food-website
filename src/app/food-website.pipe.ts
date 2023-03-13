import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foodWebsite'
})
export class FoodWebsitePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
