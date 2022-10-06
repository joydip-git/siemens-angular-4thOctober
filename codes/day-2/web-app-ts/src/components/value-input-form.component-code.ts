import { add, subtract } from "../utilts";
import { designTemplate } from "./value-input-form.component-tamplate";

// export function calculatorComponent() {

//     const eventHandler = function () {
//         const firstValTxt = <HTMLInputElement>document.getElementById('txtFirst')
//         const secondValTxt = <HTMLInputElement>document.getElementById('txtSecond')
//         const firstValue: number = Number(firstValTxt.value)
//         const secondValue: number = Number(secondValTxt.value)
//         const addRes = add(firstValue, secondValue)
//         const spanRes = document.getElementById('result')
//         if (spanRes) {
//             spanRes.innerText = addRes.toString()
//         }
//     }

//     const calculatorController = function () {
//         document.getElementById('btnCalc')?.addEventListener('click', eventHandler)
//     }

//     return {
//         template: designTemplate,
//         controller: calculatorController
//     }
// }
export class CalculatorComponent {
    eventHandler() {
        const firstValTxt = <HTMLInputElement>document.getElementById('txtFirst')
        const secondValTxt = <HTMLInputElement>document.getElementById('txtSecond')
        const firstValue: number = Number(firstValTxt.value)
        const secondValue: number = Number(secondValTxt.value)
        const addRes = add(firstValue, secondValue)
        const spanRes = document.getElementById('result')
        if (spanRes) {
            spanRes.innerText = addRes.toString()
        }
    }

    calculatorController() {
        document.getElementById('btnCalc')?.addEventListener('click', this.eventHandler)
    }

    render() {
        return {
            template: designTemplate,
            controller: this.calculatorController
        }
    }
}