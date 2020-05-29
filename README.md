# 📆 calendar-object 
![](https://img.shields.io/badge/licence-MIT-ff69b4) ![](https://img.shields.io/badge/version-v1.0-red)
#### Library for receiving a calendar in the form of a multidimensional array

  - ######  support browser and node-js
  - ######   does not require internet
  - ######  can get several years at once
  - ######   you can specify which months to receive
******
### Installation for node-js
```
npm i calendar-object
```

```Javascript
const calendarObject = require('calendar-object');
```
### Usage example
```javascript
const calendar = calendarObject.getCalendar([2019], [2020, 10, 11, 12]);
console.log(calendar);
```
###### After which you will receive an object of such a plan
![](https://i.ibb.co/YTPb7Fq/image.png)
******
```javascript
calendar[2020][12][1] = {tasks: ['buy vodka', 'never write javascript again']}
console.log(calendar);
```
###### You can put anything you want on selected days
![](https://i.ibb.co/X7DzCZR/Screenshot-1.png)
### Installation for browser
```
git clone https://github.com/itmor/calendar-object.git
```
```
cd build
```
include library file in HTML page
```HTML
<script src="calendar-object.min.js"></script>
```
Include the library in a file
```Javascript
// You have an instance available
 calendarObject
```
******
### Description of public methods
### getCalendar(Array<Number>.....);
If you want to get the whole year with all months, just pass in an array whose first element will be a year of a numeric type.
- #### .getCalendar([2019]);

If you want to receive only certain months, indicate their index after the year.
- #### .getCalendar([2019, 1, 2, 5, 12]);


You can get several years at once by simply passing arrays as many times as necessary, as a result you get an object that will be several years old.
- #### .getCalendar([2007], [2020], [2090, 4, 6, 7]);

### DEV
run the command in the root to load the dependencies
```
npm i 
```

install gulp globally
```
npm i gulp -g
```
run the collector
```
gulp
```
Now you can edit the source file in src /
