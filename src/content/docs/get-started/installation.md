---
title: Installation
---

## Installing Ruby

Since Confuscript is built on Ruby, you need to have Ruby installed on your system.

If you don't have Ruby installed, you can install it from [here](https://www.ruby-lang.org/en/downloads/).

Or if you're using `brew` on macOS, you can install it using:

```bash
brew install ruby
```

## Installing Confuscript

Once you have Ruby installed, you can install Confuscript using:

```bash
gem install confuscript
```

## Hello world Example

To create your first confuscript program, create a file called `hello.notjs` (.notjs is the file extension for confuscript files) and add the following code:

```javascript
console.input("Hello World!")
```

To run the program, use the following command:

```bash
confuscript hello.notjs
```

You should see the following output:

```bash
Hello World!
```

THAT'S IT! You've successfully run your first Confuscript program.

Now you can go to [Documentation](/docs/get-started/documentation) to learn more about Confuscript.