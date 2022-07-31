import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [store, setStore] = useState([
    {
      id: 1,
      name: "beetroot",
      price: 0.52,
      inCart: 0,
    },
    {
      id: 2,
      name: "carrot",
      price: 0.35,
      inCart: 8,
    },
    {
      id: 3,
      name: "apple",
      price: 0.4,
      inCart: 7,
    },
    {
      id: 4,
      name: "apricot",
      price: 0.61,
      inCart: 5,
    },
  ]);

  //  let itemsInCart = store
  //  itemsInCart = itemsInCart.filter(item => item.amountInCart > 0)

  return (
    <div className="App">
      <header id="store">
        <h1>Grocero</h1>

        <ul className="item-list store--item-list">
          {store.map( item => (
            <li>
              <div className="store--item-icon">
                <img alt="beetroot" src="/assets/icons/001-beetroot.svg" />
              </div>
              <button>Add to cart</button>
            </li>
          ))}
        </ul>
      </header>

      <main id="cart">
        <h2>Your Cart</h2>

        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            <li>
              <img
                className="cart--item-icon"
                src="/assets/icons/002-carrot.svg"
                alt="carrot"
              />

              <p>carrot</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">10</span>
              <button className="quantity-btn add-btn center">+</button>
            </li>
          </ul>
        </div>

        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>

          <div>
            <span className="total-number">£34.83</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
