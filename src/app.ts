abstract class Department {
  static fiscalYear = 2020;
  // private readonly id :string;
  // name: string;
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return {name: name};
  }

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  abstract describe(this: Department): void;

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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "Accounting");
    this.admins = admins;
  }

  describe() {
    console.log("IT - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("not found.")
  }

  set mostRecentReport(value : string) {
    if (!value) {
      throw new Error("invalid")
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "IT");
    this.lastReport = reports[0];
  }

  describe() {
    console.log("accounting , ID:" + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name == 'Max') {
      return;
    }
    this.employees.push(name);
  }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ["Max"]);
// console.log(it);

it.addEmployee('Max');
it.addEmployee('Manu');

it.describe();
it.printEmployeeInformation();

console.log(it);

const accountding = new AccountingDepartment('d2', []);


accountding.mostRecentReport = "accounting REPORT";
accountding.addReport("something");
console.log(accountding.mostRecentReport);
// accountding.printReports();

accountding.addEmployee('Max');
accountding.addEmployee('Manu');

// accountding.printEmployeeInformation();
accountding.describe();
// const accountdingCopy = {name: 'DUMMY', describe: accountding.describe};

// accountdingCopy.describe();

