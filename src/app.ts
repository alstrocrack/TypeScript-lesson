function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  return function(constructor: any) {
    console.log("templates is displayed");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if(hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
}

@Logger("log is begin displayed - Person")
@WithTemplate("<h1>Person obj</h1>", "app")
class Person {
  name = 'Max';

  constructor() {
    console.log("Person obj is being made");
  }
}

const pers = new Person();

console.log(pers);

// ---

function Log(target: any, propertyName: string | symbol) {
  console.log("Property decolator");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  } 
}