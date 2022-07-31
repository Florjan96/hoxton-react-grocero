import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";


function App() {
   const[store, setStore] = useState( [
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
      inCart: 10,
    },
    {
      id: 3,
      name: "apple",
      price: 0.40,
      inCart: 7,
    },
    {
      id: 4,
      name: "apricot",
      price: 0.61,
      inCart: 5,
    }])
console.log(store)
  //  let itemsInCart = store
  //  itemsInCart = itemsInCart.filter(item => item.amountInCart > 0)


  return (
    <div className="App">
      
   
  </div>);
}

export default App;
