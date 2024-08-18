import React from 'react';
import ReactDOM from 'react-dom/client';
import pizzaData from './data';
import './index.css';

function App() {
  return (
    <div className="container">
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

    return (
      <header className="header">
        <h1 style={{}}>Fast React Pizza Co.</h1>
      </header>
    );
  }

  function Menu() {
    return (
      <main className="menu">
        <h2>Our Menu</h2>
        <Pizza />
      </main>
    );
  }

  function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
      <footer className="footer">
        {new Date().toLocaleTimeString()} - We're currently open
      </footer>
    );
  }

  function Pizza() {
    return (
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <div
            className="pizza"
            key={pizza.name}>
            <img
              src={pizza.photoName}
              alt={pizza.name}
            />
            <div>
              {' '}
              <h3>{pizza.name}</h3>
              <p>{pizza.ingredients}</p>
              <span>£{pizza.price}</span>
            </div>
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
