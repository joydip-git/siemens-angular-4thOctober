define(["./utilts"], function (_utilts) {
  "use strict";

  var addRes = (0, _utilts.add)(10, 20);
  var subRes = (0, _utilts.subtract)(10, 3);
  console.log(addRes);
  console.log(subRes);
});