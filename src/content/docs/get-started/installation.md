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

## Interactive Console

Confuscript includes an interactive console, also known as a REPL (Read-Eval-Print Loop), so you can experiment with Confuscript code snippets in real-time.

To start the interactive console, use either of the following:

```bash
confuscript --console
```

```bash
confuscript -c
```

You'll be greeted with a `confuscript>` prompt. Here, you can type Confuscript code and it will be executed immediately. To exit the console, type `exit`.

Example Console Session:

```bash
confuscript> null x = 10;
=> 10
confuscript> null y = 5;
=> 5
confuscript> x - y;
=> 15
confuscript> exit
Exiting Console.
```

## Editor Support

Syntax highlighting for `.notjs` files is available for:

- [VS Code](https://github.com/keshavbiswa/confuscript-vscode)
- [Vim/Neovim](https://github.com/keshavbiswa/confuscript-vim) (regex-based, works in classic Vim)
- [tree-sitter](https://github.com/keshavbiswa/confuscript-tree-sitter) (Neovim, and any tree-sitter-aware editor)

Now you can go to [Documentation](/docs/get-started/documentation) to learn more about Confuscript.