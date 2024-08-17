import React from 'react';
import ReactDOM from 'react-dom/client';

import pizzaData from './data';

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <Pizza />
    </div>
  );

  function Pizza() {
    return (
      <ul>
        {pizzaData.map((pizza) => (
          <div>
            <h2>{pizza.name}</h2>
            <p>{pizza.ingredients}</p>
          </div>
        ))}
      </ul>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
