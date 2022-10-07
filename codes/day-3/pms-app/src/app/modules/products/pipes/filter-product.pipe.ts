import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../models/product.model";

@Pipe({
    name: 'productfilter'
})
export class FilterProductPipe implements PipeTransform {
    transform(value: Product[], ...args: string[]): Product[] {
        if (value && value.length > 0 && args.length > 0 && args[0] !== '') {
            return value.filter(
                function (p) {
                    return p.productName.toLocaleLowerCase().indexOf(args[0].toLocaleLowerCase()) !== -1
                }
            )
        } else {
            return value
        }
    }
}