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

type getAllVlues<T> = T extends object ? getAllVlues<T[keyof T]> : T;

type result = getAllVlues<Obj>;
// type result = "Electronics" | 100 | "Computers" | 50
//                             | "Laptops" | 20 | "b"
