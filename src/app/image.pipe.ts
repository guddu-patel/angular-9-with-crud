import { Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from "@angular/common";
@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value, ...args: any[]) {
    let errImg = 'https://icon2.cleanpng.com/20180605/ijl/kisspng-computer-icons-image-file-formats-no-image-5b16ff0d2414b5.0787389815282337411478.jpg';
    if (value) {
      return value;
    }
    return errImg;
  }

}
