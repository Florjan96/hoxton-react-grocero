import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";


function getItemImagePath(item:any){
  let id=String(item.id).padStart(3,'0')
  return `/assets/icons/${id}-${item.name}.svg`
}
function App() {
  const [store, setStore] = useState([
    {
      id: 1,
      name: "beetroot",
      price: 0.52,
      inCart: 0,
      stock:3
    },
    {
      id: 2,
      name: "carrot",
      price: 0.35,
      inCart: 8,
      stock:4
    },
    {
      id: 3,
      name: "apple",
      price: 0.4,
      inCart: 7,
      stock:6
    },
    {
      id: 4,
      name: "apricot",
      price: 0.61,
      inCart: 5,
      stock:12
    },
  ]);

  function getCards(){
    return store.filter(cardItem=>cardItem.inCart>0)
  }

  let card=getCards()
 
  return (
    <div className="App">
      <header id="store">
        <h1>Grocero</h1>

        <ul className="item-list store--item-list">
          {store.map( item => (
            <li>
              <div className="store--item-icon">
                <img alt="beetroot" src={getItemImagePath(item)} />
              </div>
              <button>Add to cart({item.stock})</button>
            </li>
          ))}
        </ul>
      </header>

      <main id="cart">
        <h2>Your Cart</h2>

        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">

        {card.map(item=>
          
          <li>
              <img
                className="cart--item-icon"
                src={getItemImagePath(item)}
                alt="carrot"
              />

              <p>{item.name}</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">{item.inCart}</span>
              <button className="quantity-btn add-btn center">+</button>
            </li>
          
          )}
           
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
