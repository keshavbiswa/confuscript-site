---
title: Functions
---

## Introduction

Functions in Confuscript are denoted by `print` keyword.
And when we need to return a value, we `return` the value using `void` keyword.

The rest is basically the same as any other programming language.

## Example

```javascript
null a = 5;
null b = 6;

print addNumbers(a, b) {
  null c = a + b;
  console.input("This prints the sum of two numbers.");
  console.input("The result is:");
  console.input(c);
  void c;
};

addNumbers(a, b);
```

The output for the above code will be:

```bash
This prints the sum of two numbers.
The result is:
-1
```
