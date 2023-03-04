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