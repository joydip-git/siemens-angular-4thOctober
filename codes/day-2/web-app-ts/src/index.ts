import { CalculatorComponent } from "./components/value-input-form.component-code";


const component = new CalculatorComponent()
const obj = component.render()
const div = <HTMLDivElement>document.getElementById('mainDiv')
if (div) {
    div.innerHTML = obj.template
    obj.controller()
}