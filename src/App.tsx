import './App.css';
import Watch from './modules/Watch'
import Background from './modules/Background';
import Weather from './modules/Weather'
import Quote from './modules/Quote';
import Audio from './modules/Audio';

function App<FC>() {
  return (
    <div className="App">
      <Watch />
      <Background />
      <Weather />
      <Quote />
      <Audio />
    </div>
  );
}

export default App;
