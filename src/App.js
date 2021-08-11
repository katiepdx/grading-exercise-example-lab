import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Hello!!!');
    setTimeout(() => setMessage(''), 1000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p aria-label="message">{message}</p>

        <p>
          <button aria-label="view-message" onClick={handleClick}>View Message</button>
        </p>
      </header>
    </div>
  );
}

export default App;
