import { useCallback, useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  const handleCount = useCallback(() => {
    setCount(count => count + 1);
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleCount}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <p className="read-the-docs">This is a test for cloudfront invalidation</p>
    </div>
  );
}

export default App;
