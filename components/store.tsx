export function Store({store,getItemImagePath,increaseQuantity}){

 return( <header id="store">
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
</header>)

}