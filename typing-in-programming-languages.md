# Static vs. Dynamic Typing
Programmers have been tearing each other apart for half a century over the static vs. dynamic type debate. So I might as well add my two cents. The idea of static typing is simple. You tell the computer what the types of all of your variables and parameters should be, and if you accidentally enter an invalid type, an error is thrown at compile-time. Dynamic typing is simply the absence of any compile-time constraints on the types of variables.

Languages can also be strongly typed (when type constraints are enforced at runtime) or weakly typed (when type constraints are not enforced at runtime). However, in this post, I will be focusing on the type constraints of statically typed languages.

Type annotations (how you tell the compiler which type you wish your variables to be) are a determining factor in the quality of a static type system. There's a stark difference between:
```
ArrayList<String> strs = new ArrayList<String>();
```
and:
```
var strs = string[];
```

In the first example, the verbosity of the type annotations is detrimental to the quality of the code. The line of code is drowned in meaningless clutter and the original intention (to declare an array of strings) is lost. In the second example, your intent is incredibly clear, and the compiler can still figure out you want an array of strings. However, the brevity of the following example surpasses that of the above with flying colors:
```
strs = []
```
However, the type annotation is lost. While the repulsiveness of the first example is obvious, the controversy rages over whether the brevity of the example above is worth the sacrifice, or if the verbosity of the second example is worth the type safety.

In a small program (1000 lines and under), you could keep track of variable types pretty well and if a number was accidentally cropping up in the `strs` array, it would be easy to find the source. You could find the location where a new item was being inserted into the array, and from there you could figure out the error.

However, when you are developing an enterprise-level application with tens of thousands of lines of code, you can easily find yourself sorting through hundreds of functions or a messy inheritance chain to find the origin of the miscreant number. If you had used static types, you would have never inserted the number into the `strs` array in the first place, as the error that produced the number would have been caught long ago.

So, while static types are cumbersome in small-scale applications and short programs, in an enterprise-level application, they are an important tool in reducing and isolating errors (along with functional programming and modularity). The solution is *gradual types*. Programming languages with gradual types allow type annotations, but when something doesn't have an annotation, it's inferred to have a dynamic type. This allows the programmer to opt-in and out of static types as they see fit.

When gradual types are paired with an elegant and legible static type system (looking at you, Java) the type system goes from a hindrance to an ally. Some examples of this are Groovy (one of the original languages with a gradual type system) and the fledgling type system that Python has introduced (work still needs to be done). I would like to include TypeScript in this list of languages with gradual type systems, but I find it's type system constraining and it's still a work in progress, in my view. Nevertheless, it's a step in the right direction, and the implementation of gradual types in JavaScript would delight many people, including myself (to a lesser extent).

Ultimately, gradual types propose a beneficial compromise to the static vs. dynamic debate. They retain the flexibility of dynamic typing with the option for static typing in larger-scale applications. It's a shame that few programming languages have implemented them, and I sincerely hope that more will implement them in the future.