class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const accountding = new Department('Accounting');
// console.log(accountding);

accountding.describe();

const accountdingCopy = {name: 'DUMMY', describe: accountding.describe};

accountdingCopy.describe();