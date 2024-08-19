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
    return (
      <header className="header">
        <h1 style={{}}>Fast React Pizza Co.</h1>
      </header>
    );
  }

  function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    const pizzaNum = pizzas.length;

    return (
      <main className="menu">
        <h2>Our Menu</h2>

        {pizzaNum > 0 ? (
          <React.Fragment key="anythingHere">
            {' '}
            <p>
              Authentic Italian cuisine. 6 Creative dishes to choose from. All
              from our stone oven, all organic. all delicious
            </p>
            <Pizza />
          </React.Fragment>
        ) : (
          <p>
            There are currently no pizzas to order. We apologise about the
            inconvenience!
          </p>
        )}
      </main>
    );
  }

  function Footer() {
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    // if (!isOpen)
    //   return (
    //     <p>
    //       We are happy to welcome you between the {openHour}:00am and {''}
    //       {closeHour}:00pm
    //     </p>
    //   );

    return (
      <footer className="footer">
        {isOpen ? (
          <Order closeHour={closeHour}></Order>
        ) : (
          <p>
            We are happy to welcome you between the {openHour}:00am and {''}
            {closeHour}:00pm
          </p>
        )}
      </footer>
    );
  }

  function Order({ closeHour }) {
    return (
      <div class="order">
        <p>
          We're open until {closeHour}:00. Come and visit us or order online.
        </p>
        <button className="btn">Order</button>
      </div>
    );
  }

  function Pizza() {
    return (
      <ul className="pizzas">
        {pizzaData.map((pizza) =>
          pizza.soldOut ? null : (
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
          )
        )}
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
