# corvette-logo
Print the iconic [Corvette](https://www.chevrolet.com/performance/corvette) C6 logo to the console using unicode box characters!

Minimum terminal width: 116 characters

## How it Looks
![What corvette-logo prints to the console](https://raw.githubusercontent.com/spirometaxas/corvette-logo/main/img/corvette-logo-demo.png)

#### The Actual Corvette C6 Logo
![The actual Corvette C6 logo](https://raw.githubusercontent.com/spirometaxas/corvette-logo/main/img/corvette-logo-original.png)

## Usage
### Via `npx`:
Print icon and text:
```
$ npx corvette-logo
```
Print just the icon:
```
$ npx corvette-logo --icon
```
Print just the text:
```
$ npx corvette-logo --text
```

### Via Global Install
```
$ npm install --global corvette-logo
$ corvette-logo
```

### Via Import
```
$ npm install corvette-logo
```
then:
```
const corvette = require('corvette-logo');
console.log(corvette.logo);  // Icon and text
console.log(corvette.icon);  // Icon only
console.log(corvette.text);  // Text only
```