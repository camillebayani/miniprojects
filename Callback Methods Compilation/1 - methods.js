// 1. Methods Exercise
// Define an object called square, which will hold methods that have to do with the geometry of squares. It should contain two methods, area and perimeter 

// area should accept the length of a side (all sides are the same in a square) and then return the side squared. 

// perimeter should accept the length of a side and return that side multiplied by 4.

// hint: 
// Area=a*a
// Perimeter=4a

// square.area(10) //100
// square.perimeter(10) //40

const square = {
    area(a){
        return a * a;
    },
    perimeter(a){
        return 4 * a;
    }
}
console.log(square.area(5));




