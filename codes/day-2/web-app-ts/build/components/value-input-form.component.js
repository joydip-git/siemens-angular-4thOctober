define(["require", "exports", "../utilts"], function (require, exports, utilts_1) {
    "use strict";
    exports.__esModule = true;
    exports.calculatorComponent = void 0;
    // const addRes = add(10, 20)
    // const subRes = subtract(10, 3)
    // console.log(addRes);
    // console.log(subRes)
    /*
    function calculateValue() {
        document.getElementById('btnCalc')?.addEventListener(
            'click',
            function () {
                const design = `<table>
            <tr>
                <td>First Value:&nbsp;</td>
                <td>
                    <input type="text" id="txtFirst" />
                </td>
            </tr>
            <tr>
                <td>Second Value:&nbsp;</td>
                <td>
                    <input type="text" id="txtSecond" />
                </td>
            </tr>
            <tr>
                <td>
                    <button id="btnCalc">Calculate</button>
                </td>
            </tr>
        </table>
        <br />
        Result:&nbsp;<span id="result"></span>
        `
                
            })
    }
    */
    function calculatorComponent() {
        var design = "<table>\n        <tr>\n            <td>First Value:&nbsp;</td>\n            <td>\n                <input type=\"text\" id=\"txtFirst\" />\n            </td>\n        </tr>\n        <tr>\n            <td>Second Value:&nbsp;</td>\n            <td>\n                <input type=\"text\" id=\"txtSecond\" />\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <button id=\"btnCalc\">Calculate</button>\n            </td>\n        </tr>\n    </table>\n    <br />\n    Result:&nbsp;<span id=\"result\"></span>\n    ";
        var eventHandler = function () {
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
        var calculatorController = function () {
            var _a;
            (_a = document.getElementById('btnCalc')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', eventHandler);
        };
        return {
            template: design,
            controller: calculatorController
        };
    }
    exports.calculatorComponent = calculatorComponent;
});
