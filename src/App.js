
import { useState } from 'react';
import { Header } from './components/Header/Header';
import { InvestmentForm } from './components/InvestmentForm/InvestmentForm';
import { InvestmentTable } from './components/InvestmentTable/InvestmentTable';

function App() {
  const [userInput, setUserInput] = useState(null);


  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  }

  if (userInput) {
    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>

      <Header />
      <InvestmentForm onCalculate={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <InvestmentTable yearlyData={userInput} />
    </div>
  );
}

export default App;
