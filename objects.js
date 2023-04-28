//Question 1
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];

function overEighteenPeople(people){
    let aboveEighteen = [];
    for(let i=0;i<people.length;i++){
        if(people[i].age >=18){
            aboveEighteen.push(people[i].name);
        }
    }
    return aboveEighteen
}
console.log(overEighteenPeople(people));

//Question 2

const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];

  function groupProducts(products) {
    const newGroup= {};
    products.forEach(product => {
      if (newGroup[product.category]) {
        newGroup[product.category].push(product);
      } else {
        newGroup[product.category] = [product];
      }
    });
    return newGroup;
  }
  console.log(groupProducts(products));


  //Question 3
  const students = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];
  
  function getTopStudents(students) {
  const topStudents = students.filter(student => {
    const add= student.scores.reduce((total, score) => total + score, 0);
    const average = add / student.scores.length;
    return average >= 85;
  });
  return topStudents.map(student => student.name);
}
console.log(getTopStudents(students));
//Question 4

  function carAge(Car){
    Car.age =function(){
        const currentYear = new Date().getFullYear;
        return currentYear - this.year;
    }
  }
  const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
  };
  carAge(car);
  console.log(car.age());