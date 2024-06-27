function updateWeightInput() {
  let weight = parseFloat(document.getElementById('weight').value);
  document.getElementById('weight-input').value = weight;
  calculate();
}

function updateHeightInput() {
  let height = parseFloat(document.getElementById('height').value);
  document.getElementById('height-input').value = height;
  calculate();
}

function updateWeightSlider() {
  let weight = parseFloat(document.getElementById('weight-input').value);
  if (weight >= 20 && weight <= 200) {
      document.getElementById('weight').value = weight;
      calculate();
  }
}

function updateHeightSlider() {
  let height = parseFloat(document.getElementById('height-input').value);
  if (height >= 100 && height <= 250) {
      document.getElementById('height').value = height;
      calculate();
  }
}

function calculate() {
  let weight = parseFloat(document.getElementById('weight').value);
  let height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
  let result = document.getElementById('result');

  let bmi = weight / (height * height);
  let category;

  if (bmi < 18.5) {
      category = 'Underweight';
      result.setAttribute('style', 'color: #F2C12E;')
  } else if (bmi < 24.9) {
      category = 'Normal weight';
      result.setAttribute('style', 'color: #60BF81;')
  } else if (bmi < 29.9) {
      category = 'Overweight';
      result.setAttribute('style', 'color: #F27405;')
  } else {
      category = 'Obesity';
      result.setAttribute('style', 'color: #D92525;')
  }

  result.innerText = `Your BMI is ${bmi.toFixed(2)} ${category}`;
}
