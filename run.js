// Array
let b = a - 5;	const daysOfWeek = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
a = 4;	console.log(daysOfWeek[2]);
console.log(b,a);
// Object
const myInfo = {
    name: 'Dami',
    age: 29,
    gender: 'Male',
    inHandsome: true,
    favMovies: ['About Time', 'La La Land', 'Matilda'],
    favFood: [
        {
            name: 'Kimchi',
            fatty: false
        },
        {
            name: 'Cheese Burger',
            fatty: true
        },
    ]
};
myInfo.gender = 'Female';
console.log(myInfo.gender);
console.log(myInfo); 