const form = document.querySelector('form');
const button = document.querySelector('button')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

button.addEventListener('click', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const bmi1 = document.getElementById('bmi');
  const category = document.getElementById('category');
  const message = document.getElementById('message');


  if (height === '' || height <= 0 || isNaN(height)) {
        alert("Please give a valid height");
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
        alert("Please give a valid weight");
  } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //Show the result
        if (bmi < 18.5) {
            bmi1.innerText = `BMI: ${bmi}`;
            category.innerText = `Category: Underweight`;
            message.innerText = 'You should eat more nutritious food.';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmi1.innerText = `BMI: ${bmi}`;
            category.innerText = 'Category: Normal weight';
            message.innerText = 'Great job! Keep maintaining your healthy lifestyle.';
        } else if (bmi >= 25 && bmi <= 29.9) {
            bmi1.innerText = `BMI: ${bmi}`;
            category.innerText = 'Category: Overweight';
            message.innerText = 'Consider a balanced diet and regular exercise.';
        } else {
            bmi1.innerText = `BMI: ${bmi}`;
            category.innerText = 'Category: Obesity';
            message.innerText = 'It is advisable to consult a healthcare provider.';
        }
}
}); 
