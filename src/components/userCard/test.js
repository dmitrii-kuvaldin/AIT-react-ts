function component(props) {
  console.log("переданное имя -", props.name);
  return props.name;
}

let peter = component({ age: 35, name: "Peter" });
let rosa = component({ age: 40, name: "Rosa" });

console.log(peter);
console.log(rosa);
// * мы хотим разделить значения объекта на 'кусочки' и положить их в переменные для дальнейшего использования

const car = { brand: "BMW", model: "X5", isNew: true };

// * первый способ долгий
// const brand = car.brand
// const model = car.model
// const isNew = car.isNew

// * второй короткий с деструктуризацией
const { brand, model, isNew } = car;

console.log(brand, model, isNew);

handleSubmit()

function handleSubmit() {
  console.log('submit!')
}
