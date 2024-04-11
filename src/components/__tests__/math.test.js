
const Math = require('../math');
describe("Test sum function", ()=> {
    it('add 1 + 2 to equal 3', ()=> {
        expect(Math.sum(1,2)).toBe(3);
    })
})


test('add 1 + 4 tpo equal 5', ()=> {
    expect(Math.sum(1,4)).toBe(5);
})