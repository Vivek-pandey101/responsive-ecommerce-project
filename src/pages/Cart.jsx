import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { decrementItem, incrementItem, removeFromCart } from "../redux/features";

function Cart() {
  const cartData = useSelector((state) => state.ApiData.cartData);
  console.log(cartData);
  const dispatch = useDispatch()

  return (
    <div className={styles.CartContainer}>
      <h1>Cart</h1>
      {cartData.length === 0 ? (
        <p>Cart is empty...</p>
      ) : (
        cartData.map((cartItem) => (
          <div key={cartItem.item.id} className={styles.cartItem}>
            <img src={cartItem.item.images} alt="Image" />
            <div>
              <p>{cartItem.item.title}</p>
              <p>${cartItem.item.price}</p>
            </div>
            <div className={styles.quantity}>
              <button onClick={()=>dispatch(incrementItem(cartItem.item.id))}>+</button>
              <p>{cartItem.quantity}</p>
              <button onClick={()=>dispatch(decrementItem(cartItem.item.id))}>-</button>
            </div>
            <button className={styles.RemoveBtn} onClick={()=>dispatch(removeFromCart(cartItem.item.id))}>X</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
