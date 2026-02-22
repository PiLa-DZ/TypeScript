Types ->
        Primitive -> Boolean   Number  String Void  Null  Undefined   
        Object    -> Interface Class   Enums  Array Tuple Object
        Top       -> Any       Unknown
        Botom     -> Never

Type Assertion   -> (as) (as any) (as const) Not-Null-(!) Setisfies

Infer and Compat -> Inference  Compatibility

Combining Types  -> Union-(|) Literal-Unions-(|) Intersection-(&) Intersection-Conflict-(&) Type-Aliases-(type) (keyof)

Type Guards Narrowing -> 
                        Instanceof { Constructor                     }
                        TypeOf     { Primitives                      } Null-Problem
                        IN         { Interface                       }
                        Equality   { (null undefined) Literal-Unions }
                        Truthiness { 
                                     Falsy-Rule-(0 NaN "" null undefined false) 
                                     Coercion-(!!)
                                     Logical-Operators-(&& ||) 
                                   } Zero-Bug-(0) 
                        Predicates { (is) } 
TS_Functions          ->
                        Functions  {Return-Type Expressions-Blueprint Overloads}
                        Parameters {Parameter-types Optional-(?) Default-(=) Rest(...)}
