import React from 'react';
import ReactDOM from 'react-dom/client';

import pizzaData from './data';

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );

  function Header() {
    const headerStyle = {
      color: 'red',
      fontSize: '48px',
      textTransform: 'uppercase',
    };

    return <h1 style={headerStyle}>Fast React Pizza Co.</h1>;
  }

  function Menu() {
    return (
      <div>
        <h2>Our Menu</h2>
        <Pizza />
      </div>
    );
  }

  function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
      <footer>{new Date().toLocaleTimeString()} - We're currently open</footer>
    );
  }

  function Pizza() {
    return (
      <ul>
        {pizzaData.map((pizza) => (
          <div>
            <img
              src={pizza.photoName}
              alt={pizza.name}
            />
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
