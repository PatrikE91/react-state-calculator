import { useState } from "react";
import "./App.css";

function App() {
  const [pannelOne, setPannelOne] = useState(0);
  const [operator, setOperator] = useState('+');
  const [pannelTwo, setPannelTwo] = useState(0);
  const [result, setResult] = useState(0)
  const [storedNumber, setStoredNember] = useState(0)

  const setNumberOne = (i) => pannelOne === 0 ? setPannelOne(i) : setPannelOne(pannelOne + i);
  const setNumberTwo = (i) => pannelTwo === 0 ? setPannelTwo(i) : setPannelTwo(pannelTwo + i);

  const total = (numOne, operator, numTwo) => {
    if(operator === '+'){
     const total = parseFloat(numOne) + parseFloat(numTwo)
     return total.valueOf()
    }
    if(operator === '-'){
      const total = parseFloat(numOne) - parseFloat(numTwo)
      return total.valueOf()
    }
    if(operator === '*'){
      const total = parseFloat(numOne) * parseFloat(numTwo)
      return total.valueOf()
    }
    if(operator === '/'){
      const total = parseFloat(numOne) / parseFloat(numTwo)
      return total.valueOf()
    }
  }


  return (
    <div className="calculator">
      <div className="panel">
        <p>{pannelOne}</p>
        <div className="numbers">
          <button onClick={() => setNumberOne('1')}>1</button>
          <button onClick={() => setNumberOne('2')}>2</button>
          <button onClick={() => setNumberOne('3')}>3</button>
          <button onClick={() => setNumberOne('4')}>4</button>
          <button onClick={() => setNumberOne('5')}>5</button>
          <button onClick={() => setNumberOne('6')}>6</button>
          <button onClick={() => setNumberOne('7')}>7</button>
          <button onClick={() => setNumberOne('8')}>8</button>
          <button onClick={() => setNumberOne('9')}>9</button>
          <button onClick={() => String(pannelOne)[0] === 0 ? console.log('hi') : setNumberOne('0')}>0</button>
          <button onClick={() => setPannelOne(0) }>Clear</button>
          <button onClick={() => setPannelOne(storedNumber)}>Recall</button>
          <button onClick={() => pannelOne.includes('.') ? console.log('hi') : setNumberOne('.')}>.</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => setOperator('+')}>+</button>
          <button onClick={() => setOperator('-')}>-</button>
          <button onClick={() => setOperator('*')}>*</button>
          <button onClick={() => setOperator('/')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{pannelTwo}</p>
        <div className="numbers">
          <button onClick={() => setNumberTwo('1')}>1</button>
          <button onClick={() => setNumberTwo('2')}>2</button>
          <button onClick={() => setNumberTwo('3')}>3</button>
          <button onClick={() => setNumberTwo('4')}>4</button>
          <button onClick={() => setNumberTwo('5')}>5</button>
          <button onClick={() => setNumberTwo('6')}>6</button>
          <button onClick={() => setNumberTwo('7')}>7</button>
          <button onClick={() => setNumberTwo('8')}>8</button>
          <button onClick={() => setNumberTwo('9')}>9</button>
          <button onClick={() => String(pannelTwo)[0] === 0 ? console.log('hi') : setNumberTwo('0')}>0</button>
          <button onClick={() => setPannelTwo(0)}>Clear</button>
          <button onClick={() => setPannelTwo(storedNumber)}>Recall</button>
          <button onClick={() => pannelTwo.includes('.') ? console.log('hi') : setNumberTwo('.')}>.</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => setResult(total(pannelOne, operator, pannelTwo)) }>=</button>
          <button onClick={() => setStoredNember(result)}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
