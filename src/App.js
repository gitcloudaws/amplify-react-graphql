import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Arquitectura Cloud <code>2024</code>.
        </p>
        <p>
          M3-E2.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://aws.amazon.com/getting-started/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn AWS
        </a>
        <a
          className="App-link"
          href="https://learn.microsoft.com/en-us/training/azure/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Azure
        </a>
      </header>
    </div>
  );
}

export default App;
