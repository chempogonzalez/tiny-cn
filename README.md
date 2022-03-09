# ⚡️ Tiny-cn

> ✨ **Super tiny (156B)** library for classNames string construction. You can construct them conditionally in a simple manner.<br>It can be a tiniest `classnames` package replacement.

## 💽 Output formats
This package is exported in 4 formats:
- ✅ **Es Module**
- ✅ **CommonJS**
- ✅ **UMD**
- ✅ **Modern** *for modern browsers that support `<script type="module">`*


## 📦 Installation

```zsh
$ npm install tiny-cn
```


## 🚀 Usage

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

> Created with JavaScript! ⚡ and latin music 🎺🎵

## 📄 License

MIT © [Chempo](https://github.com/chempogonzalez)
