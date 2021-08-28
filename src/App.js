import './App.css';
import React, {useState} from 'react';
import Slider from 'react-input-slider';

const App = () => {
  const [count, setCount] = useState(9);
  const [password, setPassword] = useState('');
  

  const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const numbers = '0123456789'.split('');
  const symbols = '!@#$%^&*()'.split('');
  const [options, setOptions] = useState([...lowercase]);

  const editOptions = (index) => {
    if (index === 1) {
      if (options.includes(...uppercase)) {
        setOptions(options.filter(item => !uppercase.includes(item)));
      } else {
        setOptions(options.concat(...uppercase));
      }
    }
    if (index === 2) {
      if (options.includes(...numbers)) {
        setOptions(options.filter(option => !numbers.includes(option)));
      } else {
        setOptions(options.concat(...numbers));
      }
    }
    if (index === 3) {
      if (options.includes(...symbols)) {
        setOptions(options.filter(option => !symbols.includes(option)));
      } else {
        setOptions(options.concat(...symbols));
      }
    }
  }

  const generatePassword = () => {
    let password = '';

    for (let i = 0; i < count; i++) {
      const randomOptionIndex = Math.floor(Math.random() * options.length);
      password += options[randomOptionIndex];
    }
    setPassword(password);
  }

  return (
    <div className="App">
      <div className='inner'>
        <h1>Password Generator</h1>
        {password !== '' ?
        <div className='password'>
        <p>{password}</p>
        <button onClick={() => {navigator.clipboard.writeText(password)}}>Copy</button>
      </div>: null}
        <div className='slide'>
          <p>Length: {count}</p>
          <Slider
            axis="x"
            x={count}
            xmin={9}
            xmax={20}
            onChange={({ x }) => setCount(x)}
          />
        </div>
        <div className='options'>
          <div className='option' onClick={() => editOptions(1)}>
            <p> <input type='checkbox' checked={options.includes(...uppercase)}/> Uppercase Letters</p>
          </div>
          <div className='option' onClick={() => editOptions(2)}>
            <p><input type='checkbox' checked={options.includes(...numbers)}/>Numbers</p>
          </div>
          <div className='option' onClick={() => editOptions(3)}>
            <p><input type='checkbox' checked={options.includes(...symbols)}/>Symbols</p>
          </div>
        </div>
        <div className='generate'>
          <button onClick={() => generatePassword()}>Generate</button>
        </div>
        </div>
    </div>
  );
}

export default App;
