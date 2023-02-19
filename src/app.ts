class Department {
  // private readonly id :string;
  // name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validations
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accountding = new Department('d1', 'Accounting');
// console.log(accountding);

accountding.addEmployee('Max');
accountding.addEmployee('Manu');

accountding.describe();
accountding.printEmployeeInformation();

// const accountdingCopy = {name: 'DUMMY', describe: accountding.describe};

// accountdingCopy.describe();

