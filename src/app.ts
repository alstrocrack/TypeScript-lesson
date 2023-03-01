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

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Max'}, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if(this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStrage = new DataStorage<string>();
// textStrage.addItem(10);
textStrage.addItem("Data1");

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
// numberStorage.addItem("Data1");

// const objStorage = new DataStorage<object>();
// const obj = {name: 'Max'}
// objStorage.addItem(obj);
// objStorage.addItem({name: 'Manu'});
// // ...
// objStorage.addItem(obj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  // return {
  //   title: title,
  //   description: description,
  //   completeUntil: date
  // }
  let CourseGoal: Partial<CourseGoal> = {};
  CourseGoal.title = title;
  CourseGoal.description = description;
  CourseGoal.completeUntil = date;
  return CourseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();