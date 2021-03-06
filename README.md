# β‘οΈ Tiny-cn

> β¨ **Super tiny (156B)** library for classNames string construction. You can construct them conditionally in a simple manner.<br>It can be a tiniest `classnames` package replacement.

## π½ Output formats
This package is exported in 4 formats:
- β **Es Module**
- β **CommonJS**
- β **UMD**
- β **Modern** *for modern browsers that support `<script type="module">`*


## π¦ Installation

```zsh
$ npm install tiny-cn
```


## π Usage

```js
import { cn } from 'tiny-cn';

cn('class1', 'class2', true && 'class3');
/* Result: => 'class1 class2 class3' */


cn('class1', { class2: false, class3: true } );
/* Result: => 'class1 class3' */


cn('', null, 0, { class1: true }, { 'class2': false } );
/* Result: => 'class1' */


cn(['class1', 'class2', { class3: false }, null, 'class4']);
/* Result: => 'class1 class2 class4' */
```

> Created with JavaScript! β‘ and latin music πΊπ΅

## π License

MIT Β© [Chempo](https://github.com/chempogonzalez)
