define(["require", "exports", "../utilts", "./value-input-form.component-tamplate"], function (require, exports, utilts_1, value_input_form_component_tamplate_1) {
    "use strict";
    exports.__esModule = true;
    exports.CalculatorComponent = void 0;
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
    var CalculatorComponent = /** @class */ (function () {
        function CalculatorComponent() {
        }
        CalculatorComponent.prototype.eventHandler = function () {
            var firstValTxt = document.getElementById('txtFirst');
            var secondValTxt = document.getElementById('txtSecond');
            var firstValue = Number(firstValTxt.value);
            var secondValue = Number(secondValTxt.value);
            var addRes = (0, utilts_1.add)(firstValue, secondValue);
            var spanRes = document.getElementById('result');
            if (spanRes) {
                spanRes.innerText = addRes.toString();
            }
        };
        CalculatorComponent.prototype.calculatorController = function () {
            var _a;
            (_a = document.getElementById('btnCalc')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.eventHandler);
        };
        CalculatorComponent.prototype.render = function () {
            return {
                template: value_input_form_component_tamplate_1.designTemplate,
                controller: this.calculatorController
            };
        };
        return CalculatorComponent;
    }());
    exports.CalculatorComponent = CalculatorComponent;
});
