let makeCounter = function (val) {
  return {
    increment: function () {
      val++;
    },
    getValue: function () {
      return val;
    },
  };
};

const counter = makeCounter(0);
counter.increment();
counter.increment();

console.log(counter.getValue())

