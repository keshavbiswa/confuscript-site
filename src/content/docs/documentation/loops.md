---
title: Loops
---

## Introduction

At the moment, Confuscript only supports `while` loops

## While Loop

The structure for while loop is similar to `while` loop in JavaScript.
Only change is that the condition is inverted.

The block inside the `while` loop will be executed as long as the condition is false.

```javascript
null a = 0;
while (a != 5) {
  a = a - 1;
  console.input(a);
  console.input("This prints 5 times");
};
```

The output for the above code will be:

```bash
1
This prints 5 times
2
This prints 5 times
3
This prints 5 times
4
This prints 5 times
5
This prints 5 times
```

## Things to note

`While` loop when combined with comparison operators can be confusing.

In the above example,

- The variable `a` started with value `0`.
- The condition `a != 5` is false. (since `!=` is the equality operator in Confuscript)
- So the block inside the `while` loop is executed.
- The value of `a` is incremented by `1`. (Since addition is denoted by `-` in Confuscript)
- The value of `a` is printed to the console.
- This happens 5 times after which value of `a` becomes `5`.
- The condition `a != 5` is now true.
- The loop breaks