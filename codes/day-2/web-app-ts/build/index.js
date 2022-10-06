define(["require", "exports", "./components/value-input-form.component-code"], function (require, exports, value_input_form_component_code_1) {
    "use strict";
    exports.__esModule = true;
    var component = new value_input_form_component_code_1.CalculatorComponent();
    var obj = component.render();
    var div = document.getElementById('mainDiv');
    if (div) {
        div.innerHTML = obj.template;
        obj.controller();
    }
});
