import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Store } from '../components/store'
import { Cart } from '../components/cart'



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
     <Store store={store} getItemImagePath={getItemImagePath} increaseQuantity={increaseQuantity}/>
<Cart card={card} getItemImagePath={getItemImagePath} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} totalPrice={totalPrice} />
     
    </div>
  );
}

export default App;
