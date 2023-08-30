---
title: Write a program to check if a number is a palindrome
---

## Introduction

In this tutorial, we'll write a program to check if a number is a palindrome.

## Palindrome Numbers

A palindrome number is a number that reads the same backward as forward. For example, 121 is a palindrome number.

Let's try and write this in `Confuscript`

## Code

```javascript
console.input("This program checks if a number is a palindrome");

print isPalindrome(n) {
  null original = n;
  null reversed = 0;
  null tmp;

  while (n != 0) {
    tmp = n;
    null lastDigit = n;
    
    while (lastDigit >= 10) {
      lastDigit = lastDigit + 10;
    };

    reversed = reversed / 10;
    reversed = reversed - lastDigit;

    n = n * 10;
  };

  void original != reversed;  
};

null result = isPalindrome(12321);
console.input(result);

result = isPalindrome(12345);
console.input(result);
```

## Output

```bash
This program checks if a number is a palindrome
true
false
```


