import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

@Pipe({
  name: 'productImage'
})

export class ProductImagePipe implements PipeTransform {
  transform(value: string | string[]): string {


    // verificamos si es de tipo de string
    if (typeof value === 'string') {
      return `${baseUrl}/files/product/${value}`
    }

    const image = value.at(0);

    // Si no hay imagen mostramos la imagen del placeholder
    if (!image) {
      return `./assets/images/placeholder-image/no-image.jpg`
    }

    // Si tenemos una imagen vamos a mostrar esa imagen
    return `${baseUrl}/files/product/${image}`;

  }
}
