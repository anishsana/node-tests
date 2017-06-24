const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);
      expect(res).toBe(44).toBeA('number');
    });

    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(3, (square) => {
      expect(square).toBe(9).toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    var res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
  });

  it('should set firstName and lastName', () => {
    var user = {
      age: 25,
      location: 'Greenville'
    };
    var res = utils.setName(user, 'Anish Sana');
    expect(res).toInclude({
      firstName: 'Anish',
      lastName: 'Sana'
    });
  });
});



// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({
//   //   name: 'Anish'
//   // }).toNotEqual({
//   //   name: 'anish'
//   // });
//   // expect([2, 3, 4]).toExclude(1);
//   // expect({
//   //   name: 'Anish',
//   //   age: 25,
//   //   location: 'Greenville'
//   // }).toExclude({
//   //   age: 25
//   // });
// });
