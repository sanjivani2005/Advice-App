import './App.css';
import RandomAdvice from './Comps/RandomAdvice';
import ParticularAdvice from './Comps/ParticularAdvice';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Advice Generator </h1>
      <RandomAdvice/>
      </header>
      <header className="App-header1">
      <h1> Particular Generator (Selection)</h1>
      <ParticularAdvice/>
      </header>
    </div>
  );
}

export default App;
