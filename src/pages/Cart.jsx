import { useSelector } from "react-redux";
import styles from "./Cart.module.css";

function Cart() {
  const cartData = useSelector((state) => state.ApiData.cartData);
  console.log(cartData);

  return (
    <div className={styles.CartContainer}>
      <h1>Cart</h1>
      {cartData.length === 0 ? (
        <p>Cart is empty...</p>
      ) : (
        cartData.map((cartItem, index) => (
          <div key={index} className={styles.cartItem}>
            <img src={cartItem.item.images} alt="Image" />
            <div>
              <p>{cartItem.item.title}</p>
              <p>${cartItem.item.price}</p>
            </div>
            <p>Quantity: {cartItem.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
