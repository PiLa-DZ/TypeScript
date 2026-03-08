// The Challenge: The NumericReport
// Create a generic NumericReport<T> that:
// 1. Filters the object to only keep number fields.
// 2. Transforms those fields so they are readonly
// 3. Appends the suffix _total to every key name.
type SalesData = {
  id: number;
  productName: string;
  revenue: number;
  tax: number;
  isCompleted: boolean;
};

// --- YOUR CODE HERE ---
type NumericReport<T> = {
  readonly [K in keyof T as T[K] extends number
    ? `${K & string}_total`
    : never]: T[K];
};

type a = NumericReport<SalesData>;
// type a = {
//     readonly id_total: number;
//     readonly revenue_total: number;
//     readonly tax_total: number;
// }
// -----------------------

/* Target Output:
{
  readonly revenue_total: number;
  readonly tax_total: number;
}
*/
