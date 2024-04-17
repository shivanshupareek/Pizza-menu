import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1> Pareek Pizzeria </h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2> Our Menu </h2>

      <div>{pizzaData.map(Pizza)}</div>

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={10}
        imageName="pizzas/spinaci.jpg"
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, sun-dried tomatoes & pesto"
        price={15}
        imageName="pizzas/funghi.jpg"
      />

      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price="7"
        imageName="pizzas/focaccia.jpg"
      /> */}
    </main>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.imageName} alt={props.name} />
      <h3> {props.name} </h3>
      <p> {props.ingredients} </p>
      <span>{props.price + 2}</span>
    </div>
  );
}
function Footer() {
  //   const hour = new Date().getHours();
  //   const openHour = 12;
  //   const closeHour = 23;
  //   //   console.log(hour);
  //   if (hour >= openHour && hour <= closeHour) alert(`We are open`);
  //   else alert(`We are closed`);

  return (
    <footer>{new Date().toLocaleTimeString()}.We're currently open</footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
