import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'productfilter'
})
export class FilterProductPipe implements PipeTransform {
    transform(value: any[], ...args: string[]): any[] {
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