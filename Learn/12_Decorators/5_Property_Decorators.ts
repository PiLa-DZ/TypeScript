// Property Decorators
// These are used on variables inside a class. You don't get a "descriptor" here because properties don't have "logic" to wrap—they just hold values.

// Parameters:
// -- 1. target: The class prototype.
// -- 2. propertyKey: The name of the variable (string).

// This is exactly how TypeORM or Sequelize tags database columns.


function Column(target: any, key: string) {
  console.log(`Property "${key}" is marked as a DB column.`);
}

class Student {
  @Column
  firstName: string;
}
