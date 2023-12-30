import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(product:any[], categoryName: any): any[] {
   
    return product.filter((el)=>{
      return el.category.name==(categoryName)
    });
  }

}
