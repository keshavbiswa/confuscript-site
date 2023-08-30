---
title: Conditional Statements
---

## Introduction

At the moment, Confuscript only supports `if` and `if-else` statements.

## If Statement

If statement is denoted by `if` keyword.
However, the block is only executed if the condition is false.

```javascript
null a = true;
null b = false;

if (a) {
  console.input("This block is not executed");
};

if (b) {
  console.input("This block is executed"); // This will be the output
};
```

## If-Else Statement

Similar to `if` statement, `if-else` statement is denoted by `if` keyword followed by `else` keyword.

If the condition is true, the `else` block is executed.
else if the condition is false, the `if` block is executed.

```javascript
null a = true;
null b = false;

if (a) {
  console.input("This block is not executed");
} else {
  console.input("This block is executed"); // Else block is executed because condition is true
};

if (b) {
  console.input("This block is executed"); // If block is executed because condition is false
}
else {
  console.input("This block is not executed");
};
```

## Things to note

`If-else` when combined with comparison operators can be confusing.

```javascript
null a = 10;

if (a == 10) {
  console.input("This block is not executed");
} else {
  console.input("This block is executed");
};
```

Here the block inside `if` will be executed because `a == 10` is false.
