import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header id="store">
        <h1>Grocero</h1>
      </header>
      
      <ul className="item-list store--item-list">
        <li>
          <div className="store--item-icon">
            <img alt="beetroot" src="/assets/icons/001-beetroot.svg" />
          </div>
          <button>Add to cart</button>
        </li>
        <li>
          <div className="store--item-icon">
            <img alt="carrot" src="/assets/icons/002-carrot.svg" />
          </div>
          <button>Add to cart</button>
        </li>
        <li>
          <div className="store--item-icon">
            <img alt="apple" src="/assets/icons/003-apple.svg" />
          </div>
          <button>Add to cart</button>
        </li>
        <li>
          <div className="store--item-icon">
            <img alt="apricot" src="/assets/icons/004-apricot.svg" />
          </div>
          <button>Add to cart</button>
        </li>
        <li>
          <div className="store--item-icon">
            <img alt="avocado" src="/assets/icons/005-avocado.svg" />
          </div>
          <button>Add to cart</button>
        </li>
        <li>
          <div className="store--item-icon">
            <img alt="bananas" src="/assets/icons/006-bananas.svg" />
          </div>
          <button>Add to cart</button>
        </li>
        <li>
          <div className="store--item-icon">
            <img alt="bell-pepper" src="/assets/icons/007-bell-pepper.svg" />
          </div>
          <button>Add to cart</button>
        </li>
        <li>
          <div className="store--item-icon">
            <img alt="berry" src="/assets/icons/008-berry.svg" />
          </div>
          <button>Add to cart</button>
        </li>
        <li>
          <div className="store--item-icon">
            <img alt="blueberry" src="/assets/icons/009-blueberry.svg" />
          </div>
          <button>Add to cart</button>
        </li>
        <li>
          <div className="store--item-icon">
            <img alt="eggplant" src="/assets/icons/010-eggplant.svg" />
          </div>
          <button>Add to cart</button>
        </li>
      </ul>
      
      
      
      
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
            <li>
              <img
                className="cart--item-icon"
                src="/assets/icons/003-apple.svg"
                alt="apple"
              />
              <p>apple</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">7</span>
              <button className="quantity-btn add-btn center">+</button>
            </li>
            <li>
              <img
                className="cart--item-icon"
                src="/assets/icons/004-apricot.svg"
                alt="apricot"
              />
              <p>apricot</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">5</span>
              <button className="quantity-btn add-btn center">+</button>
            </li>
            <li>
              <img
                className="cart--item-icon"
                src="/assets/icons/006-bananas.svg"
                alt="bananas"
              />
              <p>bananas</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">12</span>
              <button className="quantity-btn add-btn center">+</button>
            </li>
            <li>
              <img
                className="cart--item-icon"
                src="/assets/icons/007-bell-pepper.svg"
                alt="bell-pepper"
              />
              <p>bell-pepper</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">32</span>
              <button className="quantity-btn add-btn center">+</button>
            </li>
            <li>
              <img
                className="cart--item-icon"
                src="/assets/icons/009-blueberry.svg"
                alt="blueberry"
              />
              <p>blueberry</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">15</span>
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
