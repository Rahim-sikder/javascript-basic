const sides = [7, 7, 14];
const [a, b, c] = sides;

const isIsosceles = (a === b || b === c || a === c) && !(a !== b && b !== c);

console.log(`Is the triangle with sides ${sides.join(', ')} isosceles? ${isIsosceles}`);
