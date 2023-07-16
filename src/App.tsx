import './App.css';
import Watch from './modules/Watch'
import Background from './modules/Background';
import Weather from './modules/Weather'
import Quote from './modules/Quote';
import Audio from './modules/Audio';

function App<FC>() {
  return (
    <>
      <header className="header">
        <Weather />
      </header>
      <main className='main'>
        <Watch />
        <Quote />
      </main>
      <footer className='footer'>
        <Audio />
        <Background />
      </footer>
    </>
  );
}

export default App;
