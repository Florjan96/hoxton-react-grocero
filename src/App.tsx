import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from '../components/Header'
import Main from '../components/Main'
import initialStore from '/store'

function App() {
   const[store, setStore] = useState(initialStore)

  //  let itemsInCart = store
  //  itemsInCart = itemsInCart.filter(item => item.amountInCart > 0)


  return (
    <div className="App">
      
     <Header/>
      <Main/>
  </div>);
}

export default App;
