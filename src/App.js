import logo from './logo.svg';
import './App.css';
import { Break } from './components/Break';
import { Session } from './components/Session';
import { Display } from './components/Display';


function App() {
  return (
    <div className="App container pt-5">
      <div className='row mt-5'>
        <div className='col'>
          <Break />
        </div>
        <div className='col'>
          <Session />
        </div>
      </div>
      <div className='row mt-5'>
        <Display />
      </div>
    </div>
  );
}

export default App;
