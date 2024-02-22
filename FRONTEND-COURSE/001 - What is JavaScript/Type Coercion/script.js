// Type Coercion
// one type of value can be converted to another
// javascript made the sum and the result = to '1020' because united(concateneted) the data int and string
// javascript creater decided that the sum between int and string concatenate all like a string ex: 1020 is now a string
// this is called Type Coercion but does not work with multiplication *
const a = 10 + '20';
console.log(a);

// concatenate string values 

const b = 'hello ' + 'there'
console.log(b); 
// in this case like the fist case, it's a sum, then the result is a1015
const c = 'a' + 10 + 15;
console.log(c);