export function Cart({card,getItemImagePath,decreaseQuantity,increaseQuantity,totalPrice}){
    return(
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
    )
}