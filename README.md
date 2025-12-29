# Words Global

Providing access to alphabets from different languages and dialects. This package aims to solve the problem of lacking access to alphabetic characters for various use cases.

![Words Global icon](./icon.png)

## Usage

```bash
npm install words-global
```

**JavaScript code**:

```JavaScript
import { Alphabet } from "words-global";

const alphabet = new Alphabet("english");
console.log(alphabet.getLetters());
console.log(alphabet.language);
```

## Available Languages

- [**English**](/languages/english.js)
- [**Russian**](/languages/russian.js) - [source](https://en.wikipedia.org/wiki/Russian_alphabet)
- [**Arabic**](/languages/russian.js) - [source](https://www.arabichomeschool.com/post/arabic-alphabet-with-words-alif-to-ya-vocabulary-builder-for-kids)
- [French](/languages/french.js)
- [Shona](/languages/shona.js)

## Contribution Guide

1. Clone this repository.
2. Refer to the [rules](#rules) below.
3. Create a separate branch.
4. Commit your changes and ensure to use good commit messages.
5. Open a Pull Request.
6. Wait for feedback (this can take a long time due to quality assurance).

## Rules

1. Only use double-quotes.
2. Always use semi-colons.
