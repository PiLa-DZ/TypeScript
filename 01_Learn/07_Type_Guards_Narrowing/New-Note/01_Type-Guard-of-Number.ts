function fun(age: number) {
  if (typeof age !== "number") return `Error: Is ${typeof age}`;
  if (Number.isNaN(age)) return "Error: Is NaN";
  if (!Number.isFinite(age)) return "Error: Is Infinity";
  if (!Number.isInteger(age)) return "Error: Is Float";
  if (age <= 0) return "Error: Is less than 0";
  if (age > 120) return "Error: Is Greater than 120";

  if (age >= 18) {
    return "You are old";
  } else {
    return "You are young";
  }
}
