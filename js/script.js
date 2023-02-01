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