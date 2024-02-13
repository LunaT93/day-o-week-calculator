import Day from '../src/js/date-checker';

describe('Date', () => {

  test('should corectly identify date as Date', () => {
    const day = new Day(2023, 1, 23);
    expect(day.date).toEqual(2023, 1, 23);
  });

    // test('should correctly determine whether three lengths are not a triangle', () => {
    //     const notTriangle = new Triangle(3,9,22);
    //     expect(notTriangle.checkType()).toEqual("not a triangle");
    // });

    // test('should correctly determine whether three lengths make a scalene triangle', () => {
    //     const scalTriangle = new Triangle(4,5,7)
    //     expect(scalTriangle.checkType()).toEqual("scalene triangle");
    // });

    // test('should correctly determine whether three lengths make an isosceles triangle', () => {
    //     const isoscTriangle = new Triangle(5,5,7)
    //     expect(isoscTriangle.checkType()).toEqual("isosceles triangle");
    // });
    // test('should correctly determine whether three lengths make an equilateral triangle', () => {
    //     const equiTriangle = new Triangle(5,5,5)
    //     expect(equiTriangle.checkType()).toEqual("equilateral triangle");
    //   });
});