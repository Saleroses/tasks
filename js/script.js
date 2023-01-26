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

  // Из книги
  let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

  let output;

  function tabl () {
    for (let i = 0; i < scores.length; i++) {
        output = "Babble solution #" + i + " score: " + scores[i];
        console.log(output);
    }
  }

  tabl ();

