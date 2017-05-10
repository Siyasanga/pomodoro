const avos = require('./avos');
const assert = require("assert");
describe("cheapestDeal()",function() {
  it("Should return object with the cheapest deal",function() {
    assert.equal(JSON.stringify(avos.cheapestDeal()),'{"qty":5,"price":14.5}');
  })
});
describe("expensiveDeal()",function() {
  it("Should return object with the most expensive deal",function() {
    assert.equal(JSON.stringify(avos.expensiveDeal()), '{"qty":2,"price":7}');
  })
});
describe("averageDeal()",function() {
  it("Should return average for all deals",function() {
    assert.equal(avos.averageDeal().toFixed(2), '8.63');
  })
});
