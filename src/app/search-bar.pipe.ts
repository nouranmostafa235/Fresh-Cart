import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBar'
})
export class SearchBarPipe implements PipeTransform {

  transform(product:any[], searcVal:any): any[] {
    if(searcVal!==null){
      return product.filter((el)=>{
        return el.title.toLowerCase().includes(searcVal.toLowerCase()) || el.category.name.toLowerCase().includes(searcVal.toLowerCase())
      });
    }
     return product
    }

}
