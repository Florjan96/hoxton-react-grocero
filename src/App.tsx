import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function getItemImagePath(item: any) {
  let id = String(item.id).padStart(3, "0");
  return `/assets/icons/${id}-${item.name}.svg`;
}

function App() {
  const [store, setStore] = useState([
    {
      id: 1,
      name: "beetroot",
      price: 0.52,
      inCart: 0,
      stock: 3,
    },
    {
      id: 8,
      name: "berry",
      price: 0.65,
      inCart: 34,
      stock: 11,
    },
    {
      id: 9,
      name: "blueberry",
      price: 0.8,
      inCart: 15,
      stock: 22,
    },
    {
      id: 4,
      name: "apricot",
      price: 3.61,
      inCart: 5,
      stock: 12,
    },
  ]);

  function getCards() {
    return store.filter((cardItem) => cardItem.inCart > 0);
  }
  let card = getCards();




  function totalPrice() {
    let total = 0;

    for (let item of card) {
      total += item.inCart * item.price;
    }
    return total;
  }

  function increaseQuantity(item: any) {
    if (item.stock === 0) return;

    //We should make a copy of db.We can't mutate the original db.
    let storeCopy = structuredClone(store);

    let match = storeCopy.find((target:any) => target.id === item.id);

    match.inCart++;
    match.stock--;

    setStore(storeCopy);
  }

  function decreaseQuantity(item: any) {
    if (item.stock < 1) return;

    let storeCopy = structuredClone(store);

    let match = storeCopy.find((target) => target.id === item.id);

    match.inCart--;
    match.stock++;

    setStore(storeCopy);
  }

  return (
    <div className="App">
      <header id="store">
        <h1>Grocero</h1>

        <ul className="item-list store--item-list">
          {store.map((item) => (
            <li>
              <div className="store--item-icon">
                <img alt="beetroot" src={getItemImagePath(item)} />
              </div>
              <button onClick={function(){
                increaseQuantity(item)
              }}>Add to cart({item.stock})</button>
            </li>
          ))}
        </ul>
      </header>

      <main id="cart">
        <h2>Your Cart</h2>

        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {card.map((item) => (
              <li>
                <img
                  className="cart--item-icon"
                  src={getItemImagePath(item)}
                  alt="carrot"
                />

                <p>{item.name}</p>
                <button
                  className="quantity-btn remove-btn center"
                  onClick={function () {
                    decreaseQuantity(item);
                  }}
                >
                  -
                </button>
                <span className="quantity-text center">{item.inCart}</span>
                <button
                  className="quantity-btn add-btn center"
                  onClick={function () {
                    increaseQuantity(item);
                  }}
                ></button>
              </li>
            ))}
          </ul>
        </div>

        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>

          <div>
            <span className="total-number">{totalPrice().toFixed(1)}$</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
