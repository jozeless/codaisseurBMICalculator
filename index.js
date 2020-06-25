//console.log("What does process.argv contain?", process.argv);
if (process.argv.length !== 7) {
    console.log(`
      You gave ${process.argv.length - 2} arguments(s) to the program
  
      Please provide 5 arguments for
      
      weight (kg), 
      height (m), 
      age (years), 
      wether you exercise daily (yes or no)
      and your gender (m or f)
      
      Example:
  
      $ node index.js 82 1.79 32 yes m
    `);
  
    process.exit();
  }

  
//USER INPUTS
const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);
const age = parseInt(process.argv[4]);
const dailyExercise = (process.argv[5]);
const gender = (process.argv[6]);

//CHECKS FOR NAN VALUES IN W, H, AND AGE
if (isNaN(weightInKg) || isNaN(heightInM) || isNaN(age)) {
    console.log(`
      Please make sure weight, height and age are numbers:
  
      weight (kg) example: 82 | your input: ${process.argv[2]}
      height (m) example 1.79 | your input: ${process.argv[3]}
      age (years) example 32  | your input: ${process.argv[4]} 
  
      $ node index.js 82 1.79 32 yes m
    `);
  
    process.exit();
  }

  //CHECKS AGE LIMITATION
  if (age < 20) {
      console.log(`
      This BMI calculator is designed for people over 20
     `);

   process.exit();

  }

  //CHECKS FOR MAX AND MIN WEIGHT

  if (weightInKg > 30 || weightInKg < 300) {
  console.log(`
  Please provide a number for weight in kilograms between 30 and 300
  An example of a correct input
  `)
  process.exit();
  }
 
// The formula for BMI 
let  bmi = weightInKg / (heightInM * heightInM);

// Assumptions ideal BMI is 22.5
// The formula for idealWeight 
let idealWeight = Math.round(22.5 * heightInM * heightInM);

// The formula for Basal Metabolic Rate 
let heightInCm = heightInM * 100;

//gender control
let bmr;
if (gender === 'm') {
    bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 50;
}
else {
    bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 150;
}

// daily exercise control
let dailyCalories;

if (dailyExercise === 'yes') {
    dailyCalories = bmr * 1.6
}
else {
    dailyCalories = bmr * 1.4
}
 //checks yes or no
 if (dailyExercise !== 'yes' && dailyExercise !== 'no') {
    console.log(`
    Please specify if you exercise daily with "yes" or "no"
    An example of a correct input
    `)
    }
//WEIGHT TO LOSE FORMULA WEIGHT KG - IDEAL WEIGHT
let weightToLose = weightInKg - idealWeight;
// si el peso es negativo debe ganarno perder
if (weightToLose < 0 ) {
    weightToLose = Math.abs(weightToLose);
}


//time it will take to lose the weight
const time = weightToLose / 0.5;

//calories while dieting
let caloriesWhileDieting;
 if (weightToLose < 0) {
    caloriesWhileDieting = dailyCalories - 500;
 }
 else {
    caloriesWhileDieting = dailyCalories + 500;
 }

//CONSOLE LOGS
console.log(`Person Gender is: 
${gender}`)
console.log(`Person work out: 
${dailyExercise}`)
console.log(`Height: 
${heightInM} cm`);

console.log(`Weight:
 ${weightInKg} Kg
 
 `);

console.log(`A BMI under 18.5 is considered underweight`);
console.log(`A BMI above 25 is considered overweight

`);

console.log(`Your ideal weight will be ${idealWeight} Kg`);
console.log(`You burn ${dailyCalories} calories a day`)

console.log(`If you want to reach your ideal weight of ${idealWeight} kg:`)

console.log(`Eat ${caloriesWhileDieting} per day.`);
console.log(`For ${time} weeks.`) 
