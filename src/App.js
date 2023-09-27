import logo from './logo.svg';
import './App.css';
import { Break } from './components/Break';
import { Session } from './components/Session';
import { Display } from './components/Display';


function App() {
  return (
    <div className="App">
      <Break />
      <Session />
      <Display />
    </div>
  );
}

export default App;
