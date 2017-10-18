# Ratio RGB generator

Returns a rgb color from green to red from a ratio between 0 and 1


## Installation

```bash
$ npm install https://github.com/Oliv/ratio-rgb-generator.git
```


## Usage

```js
import generateRGB from 'ratio-rgb-generator';

generateRGB(ratio);
```

To get a speed ratio :

```js
import generateRGB from 'ratio-rgb-generator';

const fn = (min, max, x) => x / (max - min);
const ratio = fn(minSpeed, maxSpeed, speed);

generateRGB(ratio);
```
