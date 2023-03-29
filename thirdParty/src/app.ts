import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator'

import { Product } from "./product.model";

const products = [
  {title: 'model1', price: 100},
  {title: 'model2', price: 200}
];

const newProd = new Product('', -100);
validate(newProd).then(errors => {
  if (errors.length > 0) {
    console.log('validate error');
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
})
console.log(newProd.getInformation());

// const p1 = new Product('model1', 100);
// const loadedProducts = products.map(prod => {
//   return new Product(prod.title, prod.price)
// });

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
