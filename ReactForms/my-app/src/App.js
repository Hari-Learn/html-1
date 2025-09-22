
import React from 'react';
import Headers from './components/Header';
import './App.css';

function App() {
  return (
    <div>
      <Headers > </Headers>  
      

      <div className="form-container">
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
