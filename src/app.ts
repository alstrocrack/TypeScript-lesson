// const names: Array<string> = [];

// const promise: Promise<string> = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Done')
//   }, 2000)
// });

// promise.then(data => {
//   data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

console.log(merge({name: 'max'}, {age: 30}));

const mergedObj = merge<{name: string}, {age: number}>({name: 'max'}, {age: 30});
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'no value';
  if (element.length > 0) {
    descriptionText = 'value is ' + element.length;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hello'));