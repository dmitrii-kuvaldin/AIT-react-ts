const fruits:string[] = ['apple', 'orange', 'pear', 'pineapple']

// * чтобы типизировать массив из объектов сначала типизируем один экземпляр
interface IHero {
  id: number
  name: string
  age: number
  isDark: boolean
  weapons: string[]
  image: string
}

// * используя типизацию одного объекта типизируем массив через []
export const fellowship:IHero[] = [
  {
    id: 1,
    name: "Gendalf",
    age: 2000,
    isDark: false,
    weapons: ["magic sword", "magic staff"],
    image:
      "https://imgcdn.stablediffusionweb.com/2024/4/21/f3736c4c-ce62-4156-b682-0c012dde551f.jpg"
  },
  {
    id: 2,
    name: "Saruman",
    age: 1800,
    isDark: true,
    weapons: ["palantir"],
    image: "https://cinema-quotes.com/wp-content/uploads/2024/05/Saruman.jpg"
  },
  {
    id: 3,
    name: "Frodo",
    age: 35,
    isDark: false,
    weapons: ["ring"],
    image:
      "https://imgcdn.stablediffusionweb.com/2024/2/24/f4dd7ebe-1b47-41ff-ab5f-541345f19c2b.jpg"
  },
  {
    id: 4,
    name: "Gimli",
    age: 50,
    isDark: false,
    weapons: ["axe"],
    image:
      "https://tolkiengateway.net/w/images/thumb/6/6f/Matt_Stewart_-_Forty-Two.jpg/640px-Matt_Stewart_-_Forty-Two.jpg"
  },
  {
    id: 5,
    name: "Arwen",
    age: 2901,
    isDark: false,
    weapons: [],
    image: "https://wegotthiscovered.com/wp-content/uploads/2022/08/Arwen_the_Lord_of_the_Rings.jpg"
  },
  {
    id: 6,
    name: "Gorlum",
    age: 200,
    isDark: true,
    weapons: ["teeth", "hands", "rocks"],
    image: "https://gamesartist.co.uk/wp-content/uploads/2023/03/srdjan-orelj-gollum-00.jpg"
  }
];

// * при именном экспорте можно совершить несколько экспортов из одного файла
// export const arr = ['red', 'green', 'blue']

// * пример итерации по массиву с методом map()
// const newfellowship = fellowship.map(hero => {
//   console.log(`${hero.name} is ${hero.age}`)
//   return `${hero.name} is ${hero.age}`
// })

// console.log(newfellowship)

// * круглые скобки (ли в короткой записи их отсутствие) не требуют return - возвращаться будет все выражение после =>
// * фигурные скобки для сложных действий требующих написание нескольких строк - требуют return

// const arr = fellowship.map(el => el.name + ' age ' + el.age);
// const arr1 = fellowship.map(el => {
//   return el.name;
// });

// console.log(arr);
// console.log(arr1);
