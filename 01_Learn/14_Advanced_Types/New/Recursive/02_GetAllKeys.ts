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

type GetAllKeys<T> = T extends object
  ? { [K in keyof T]: K | GetAllKeys<T[K]> }[keyof T]
  : never;

type result = GetAllKeys<Obj>;
// type result = "name" | "count" | 1
//               | "sub_" | "sub_name" | "sub_count"
//               | "sub_sub" | "sub_sub_name" | "sub_sub_count"
