function convertFootToCm() {
  const footInput = document.getElementById('footInput').value;
  const regex = /^(\d+)'?(\d+)?$/;
  const match = footInput.match(regex);
  
  if (match) {
      const feet = parseInt(match[1]) || 0;
      const inches = parseInt(match[2]) || 0;
      const totalInches = (feet * 12) + inches;
      const cm = totalInches * 2.54;
      document.getElementById('footOutput').innerText = `${cm.toFixed(2)} cm`;
  } else {
      document.getElementById('footOutput').innerText = "Please enter a valid height.";
  }

  document.getElementById('footOutput').classList.remove('d-none');
}

function convertPoundsToKg() {
  const poundInput = document.getElementById('poundInput').value;
  const pounds = parseFloat(poundInput);
  
  if (!isNaN(pounds)) {
      const kg = pounds * 0.453592;
      document.getElementById('poundOutput').innerText = `${kg.toFixed(2)} kg`;
  } else {
      document.getElementById('poundOutput').innerText = "Please enter a valid weight.";
  }

  document.getElementById('poundOutput').classList.remove('d-none');
}
