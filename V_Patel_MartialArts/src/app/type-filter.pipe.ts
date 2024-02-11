import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'typeFilter',
  standalone: true
})
export class TypeFilterPipe implements PipeTransform {

  transform(contentList: Content[], type: string): Content[] {
    if (!type) {
      // Filter content with no type
      return contentList.filter(content => !content.type);
    } else {
      // Filter content by type
      return contentList.filter(content => content.type === type);
    }
  }

}
