type Obj = {
  name: "Electronics";
  count: 100;
  1: "b";
  sub_: {
    sub_name: "Computers";
    sub_count: 50;
    sub_sub: {
      sub_sub_name: "Laptops";
      sub_sub_count: 20;
    };
  };
};

type GetAllPath<T> = T extends object
  ? {
      [K in keyof T]: K extends string | number
        ?
            | `${K}`
            | (T[K] extends object
                ? `${K}.${GetAllPath<T[K]> & string}`
                : never)
        : never;
    }[keyof T]
  : never;

type result = GetAllPath<Obj>;
// type result =
// "name" | "count" | "sub_"
// | "1" | "sub_.sub_name" | "sub_.sub_count"
// | "sub_.sub_sub" | "sub_.sub_sub.sub_sub_name" | "sub_.sub_sub.sub_sub_count"
