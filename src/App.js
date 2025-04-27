import './App.css';

function App() {

  function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const bmiResult = document.getElementById('bmiResult');

    if (height && weight) {
      const heightInMeter = height / 100;
      const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);
      bmiResult.innerText = `Your BMI is: ${bmi}`;
    } else {
      bmiResult.innerText = `Enter valid input`;
    }

    // Clear the result after 5 seconds
    setTimeout(() => {
      bmiResult.innerText = '';
      
    }, 5000);
  }

  return (
    <>
      <div className='bmi'>
        <div className='bmicontainer'>
          <h1 id="header">BMI CALCULATOR</h1>
          <input type='text' id='height' placeholder='Enter your height (cm)' />
          <input type='text' id='weight' placeholder='Enter your weight (kg)' />
          <button id="calcBtn" onClick={calculateBMI}>Calculate BMI</button>
          <h2 id="bmiResult"></h2>
        </div>
      </div>
    </>
  );
}

export default App;
