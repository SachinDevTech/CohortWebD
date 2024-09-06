// This is kinda creating a key-value pairs but not a blueprint so using classes are good.
// const obj1 = {
//   width: 2,
//   height: 3,
//   color: "Red"
// }

// function area(obj) {
//   return obj.width * obj.height;
// }

// let ans = area(obj1);
// console.log(ans);


// Creating class
class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    console.log(this); // this reference to this class
    
    return area;
  }

  paint() {
    console.log(`Painting with color: ${this.color}`);
  }

}

const rect = new Rectangle(2, 4, "Red"); // rect is an object while Rectangle is the class
const area = rect.area();
console.log(area)
// const color = rect.paint();