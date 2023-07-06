import './App.css';
import Watch from './modules/Watch'
import Background from './modules/Background';
import Weather from './modules/Weather'
import Quote from './modules/Quote';

function App() {
  return (
    <div className="App">
      <Watch />
      <Background />
      <Weather />
      <Quote />
    </div>
  );
}

export default App;
