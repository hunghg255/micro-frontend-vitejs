import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import AppRemote from 'remoteApp/AppRemote';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='App'>
        <h1>Counter App Host</h1>
        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>

      <br />
      <br />
      <br />

      <AppRemote />
    </>
  );
}

export default App;
