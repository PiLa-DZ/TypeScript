type Project = {
  id: number;
  metadata: {
    name: string;
    settings: {
      isPublic: boolean;
      tags: string[];
    };
  };
};

type DeepReadonly<T> = T extends object
  ? {
      readonly [K in keyof T]: DeepReadonly<T[K]>;
    }
  : T;

type result = DeepReadonly<Project>;
// type result = {
//     readonly id: number;
//     readonly metadata: {
//         readonly name: string;
//         readonly settings: {
//             readonly isPublic: boolean;
//             readonly tags: readonly string[];
//         };
//     };
// }
