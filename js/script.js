// CW возвращаем кол-во доков для кол-ва людей
function paperwork(n, m) {
    if (m < 0 || n < 0) {
      return 0;
    }
    return m * n;
  }

// CW делаем верхний регистр
function makeUpperCase(str) {
    return str.toUpperCase();
  }

  // CW возраст
  function getAge(inputString){
    return parseInt(inputString);
  }

  // Из книги -------------------------------
  let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

  let costs = [25, 27, 25, 25, 25, 25, 33, 31, 25, 29, 27, 22, 31, 25, 25, 33, 21, 25, 25, 25, 28, 25, 24, 22, 20, 25, 30, 25, 24, 25, 25, 25, 27, 25, 26, 29];

function tabl () {
    let output;
    let highScore = 0;
        for (let i = 0; i < scores.length; i++) {
            output = "Мыльный раствор #" + i + " баллы: " + scores[i];
            if (scores[i] > highScore) {
                highScore = scores[i];
            }
        }
        //console.log("Растворов всего: " + scores.length);
        //console.log("Лучний тестируемый, баллов: " + highScore);
    return highScore;
}

function best (scores, highScore) {
    let bestSolution = [];
    for (let i = 0; i < scores.length; i++)
    if (scores[i] == highScore) {
        bestSolution.push(i);
    }
    //console.log("Лучший балл набрали образцы: " + bestSolution);
    return bestSolution;  
}

let highScore = tabl();
let bestSolution = best (scores, highScore)

function effective (scores, costs, highScore) {
    let cost = 50;
    let index;
    for (let i = 0; i < scores.length; i++)
    if (scores[i] == highScore) {
        if (cost > costs[i]) {
            index = i;
            cost = costs[i];
        }
    }
   // console.log("best " + index);
    return index;
}

   
// Из книги -------------------------------


  // CW расчет топлива
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  
    if (distanceToPump / mpg <= fuelLeft) {
      return true;
    } else {
      return false;
    }
  };
  // CW расчет топлива

  // Sum Numbers
function sum (numbers) {
    "use strict";
  return numbers.reduce((a, b) => a + b, 0);
};
  // Sum Numbers

  // Создание пустого массива
  let massive = [];
  massive.push("number0");
  massive.push("number2");

  // Создание пустого массива

  // Расчет возраста отца х2
  function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
  }
// Расчет возраста отца х2

//Расчет возраста кошки и собаки по человеческим меркам
var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears;
    let dogYears;
    
    if (humanYears == 1) {
      catYears = 15;
      } if (humanYears == 2) {
      catYears = 15 + 9;
        } if (humanYears >= 3) {
      catYears = 15 + 9 + ((humanYears - 2) * 4);
          }
    
    if (humanYears == 1) {
      dogYears = 15;
      } if (humanYears == 2) {
      dogYears = 15 + 9;
        } if (humanYears >= 3) {
      dogYears = 15 + 9 + ((humanYears - 2) * 5);
          }
    
    return [humanYears,catYears,dogYears];
}
//Расчет возраста кошки и собаки по человеческим меркам

// Строка в число
  const stringToNumber = function(str){
    var x = Number(str);
    return x;
  }
// Строка в число

//updateLight
function updateLight(current) {
  if(current === "green") {
    return "yellow";
  } else if(current === "yellow") {
      return "red";
  } else if(current === "red") {
      return "green";
  }
}
//updateLight

//finalGrade 
function finalGrade (exam, projects) {
  if (exam > 90 && projects > 10) {
    return 100;
  } if (exam > 75 && projects >= 5) {
    return 90;
    } if (exam > 50 && projects >= 2) {
    return 75;
      } if (exam < 50 && projects < 2) {
    return 0;
       }
}
//finalGrade 
function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } if (exam > 75 && exam <= 90 && projects >= 5 && projects <= 10) {
    return 90;
    } if (exam > 50 && projects >= 2 ) {
    return 75;
      } else {
    return 0;
       }
}
//finalGrade 

//boolToWord 
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}
//boolToWord

//second
function past(h, m, s){
  return h * 3600000 + m * 60000  + s * 1000;
}
//second

//passagiri
function enough(cap, on, wait) {
  if (wait <= (cap - on)) {return 0;}
  else {return (wait + on) - cap}
}
//passagiri

//bmi
function bmi(weight, height) {
  if (weight / (height**2) <= 18.5) 
   {return "Underweight";}
  if (weight / (height**2) <= 25 && weight / (height**2) > 18.5) 
    {return "Normal";}
  if (weight / (height**2) <= 30 && weight / (height**2) > 25) 
   {return "Overweight";}
  if (weight / (height**2) > 30) 
    {return "Obese";}
  }
  //bmi

  //String
  function numberToString(num) {
    return String(num)
  }
  //String

  //
  function sayHello(name) {
    return 'Hello, ' + name
  } 
  //

  //
  function rentalCarCost(d) {
    let total = 0;
    if (d < 3) {
      total = d*40;
    } if (d >= 3 && d < 7) {
      total = d*40-20;
    } if (d >= 7) {
      total = d*40-50;
    }
    return total
  }
  //

  //
  function positiveSum(arr) {
    return arr.filter(i => i > 0).reduce((a,b)=>a+b,0)
  }
  //

  //////////
  function prequal(cars) {
    if (cars.mileage > 10000) {
      return false;
    } else if (cars.year > 1960) {
      return false;
    }
    return true;
  }

  let taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yelloy",
    passengers: 4,
    convertible: false,
    mileage: 281341
  }

  let maxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1959,
    color: "yelloy",
    passengers: 4,
    convertible: false,
    mileage: 1341
  }
  //  console.log(prequal(maxi))
  ////////////

  //////////
  function findDifference(a, b) {
      let finA = 0;
      let finB = 0;
     
     finA = a[0]*a[1]*a[2];
     finB = b[0]*b[1]*b[2];
     
     if (finA > finB) {
      return finA - finB
     } else {
      return finB - finA
      }
   }
   ///////////

   //
let min = function(list){
    
    return Math.min.apply(null, list);
}

let max = function(list){
    
    return Math.max.apply(null, list);
}
//

//
function sumStr(a,b) {
  let c;
  let d;
  let fin;
  c = Number(a);
  d = Number(b);
  fin = c+d
  return String(fin);
}
/////////

let car = {
  name: "Cool",
  power: "450 Hp",
};

let names = "power";
//console.log(car[names]);  

///
function hero(bullets, dragons){
  if (bullets >= dragons*2) {
    return true
  } else {
    return false
  }
}
/////
////
function makeNegative(num) {
  return num*0-num
}
/////
function makeNegative(num) {
  if (num >= 0) {
    return num*0-num
  } else {
    return num
  }
}
////

/////
function setAlarm(employed, vacation){
  if (employed == true && vacation == false) {
    return true
  } else {
    return false
  }
}
//////

//
function getRealFloor(n) {
  if (n > 0 && n < 13) {
    return n-1
  } if (n >= 13) {
    return n-2
  } if (n <= 0) {
    return n
  } 
}
///
function countSheeps(arrayOfSheep) {
  const count = arrayOfSheep.filter(Boolean).length;
  return count
}
////
////
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
///
///
function testSize(num) {
  // Only change code below this line
if (num < 5) {
  return "Tiny"
} else if (num < 10) {
  return "Small"
} else if (num < 15) {
  return "Medium"
} else if (num < 20) {
  return "Large"
} else if (num >= 20) {
  return "Huge"
} else {
  return "Change Me"
}

  // Only change code above this line
}
//////
function golfScore(par, strokes) {
    if(strokes == 1) return "Hole-in-one!";
    else if(strokes <= par -2) return "Eagle";
    else if(strokes === par -1) return "Birdie";
    else if(strokes === par) return "Par";
    else if(strokes === par + 1) return "Bogey";
    else if(strokes === par + 2) return "Double Bogey";
    else if(strokes >= par + 3) return "Go Home!";
}
//////

////
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
  }

  // Only change code above this line
  return answer;
}
//////
///
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
////
function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}
/////
function reverseList(list) {
  return list.reverse();
}

///
function digitize(n) {
  return String(n).split("").reverse().map(Number);

}
/// удалить первый и последний символ
function removeChar(str){
  return str.slice(1,-1)
 };
 //// сложение чисел 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
 function summation (num) {
  let sum = 0
    for(let i = 0; i <= num; i++) {
        sum += i
    }
    console.log(sum)
}

////
function saleHotdogs(n){
  if (n<5) { return n*100 } 
  else if (n >= 5 && n < 10) {return n*95}
  else {return n*90} 
}
////////

function grow(x){
  let res = 1;
  for (let i = 0; i < x.length; i++) {
    res *= x[i];
  }
  return res;
}
///////
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length*width*height
  }
}
/////

function litres(time) {
  return Math.trunc(time/2)
}
///

function unusualFive() {
  let five = "irkaa"
  return five.length
}
/////
function smash (words) {
  return words.join(" ");
}
//////

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0)
    return [];
  
  var positive = 0;
  var negative = 0;
  
  for (var i=0, l=input.length; i<l; ++i)
  {
    if (input[i] > 0)
      ++ positive;
    else
      negative += input[i];
  }
  
  return [positive, negative];
}
//////
let object = {
  name: "irka",
  prikol: "pipirka",
}
///// остаток от деления 
function evenOrOdd(number) {
  if (number % 2 != 0){
    return "Odd"
  } else {
    return "Even"
  }
}
/////// Сумма массива + вычисление результата четн/нечет
let array = [1,1,4];
function oddOrEven(array) {
  let sum = array.reduce((a, b) => a + b, 0);
  console.log(sum)
}
oddOrEven(array);


