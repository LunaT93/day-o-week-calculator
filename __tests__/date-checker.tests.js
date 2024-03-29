import Day from '../src/js/date-checker';

describe('Date', () => {

  // test('should corectly identify date as Day', () => {
  //   const day = new Day(2023, 1, 23);
  //   expect(day.date).toEqual(2023, 1, 23);
  // }); // will fail now that I removed this.date

  test('should correctly identify the day as 0-6', () => {
    const day1 = new Date('1975-8-19');
    const dayOfWeek1 = new Day(day1);
    expect(dayOfWeek1.getTheDay()).toEqual('Tuesday'); 
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