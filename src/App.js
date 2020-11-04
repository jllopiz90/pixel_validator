import React from 'react';
import './App.css';
import validatePixelString from './validation/validation';
import TextField from './components/TextField';

function App() {
  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [value, setValue] = React.useState('');

  const onChange = (value) => {
    setValue(value);
    const { valid, message } = validatePixelString(value);
    setError(!valid);
    setMessage(message);
  }

  return (
    <div className="App">
      <TextField
        name="pixelValidator"
        error={error}
        message={message}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default App;
