import React from 'react';
import './App.css';
import InputField from './components/InputField';

function App() {
  const inputRefs = React.useRef([
    React.createRef(), React.createRef(), React.createRef(), React.createRef()
  ]);
  const [data, setData] = React.useState({});

  const handleChange = (name, value) => {
    setData(prev => ({...prev, [name]: value}))
  }

  const submitForm = (e) => {
    e.preventDefault();
    
  }

  console.log(data)
  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <InputField
          ref={inputRefs.current[0]}
          name="gmail_id"
          label="Gmail ID:"
          onChange={handleChange}
        />
        <InputField
          ref={inputRefs.current[1]}
          name="phone number"
          label="Phone Number:"
          onChange={handleChange}
        />
        <InputField
          ref={inputRefs.current[2]}
          name="username"
          label="Username:"
          onChange={handleChange}
        />
        <InputField
          ref={inputRefs.current[3]}
          name="password"
          label="Password:"
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default App;
