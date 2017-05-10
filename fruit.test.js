const fruit = require("./fruit");
const assert = require("assert");
describe("cheapestSeller()",function () {
  it("Should return cheapest seller of the chosen fruit", function() {
    assert.deepEqual(cheapestSeller("oranges"),"['chockers','oranges','4']");
  })
});
describe("shopByFruit()",function () {
  it("Should return a list of shops that sell apples in Ascending order by price", function() {
    assert.deepEqual(shopByFruit("apples",'A'),[['shopwrong','apples','2'],['kwakspar','apples','4'],['woolingsworth','apples','4'],['chockers','apples','5']]);
  })
});
describe("shopByFruit()",function () {
  it("Should return a list of shops that sell apples in Descending order by price", function() {
    assert.deepEqual(shopByFruit("apples",'D'),[['woolingsworth','apples','4'],['chockers','apples','5'],['shopwrong','apples','2'],['kwakspar','apples','4']]);
  });
});
describe("shopByFruit()",function () {
  it("Should return a list of shops that sell oranges in Descending order by price", function() {
    assert.deepEqual(shopByFruit("oranges",'D'),[['woolingsworth','oranges','4'],['chockers','oranges','5'],['shopwrong','oranges','2'],['kwakspar','oranges','4']]);
  });
});
