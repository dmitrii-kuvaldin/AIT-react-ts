import styles from './cart.module.css';

import { useCart } from "../../context/CartContext";
import MyButton from "../myButton/MyButton";

export default function Cart(): JSX.Element {
  // ! данные из контекста забираем через useCart()
  // мы можем забрать все что находится в контексте и использовать по необходимости
  const { cart, clearCart, removeFromCart } = useCart();

  //  функция подсчета итоговой суммы
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }

  return (
    <div className={styles.cartContainer}>
      <h2>Cart 🛒</h2>
      {/* если корзина пустая говорим об этом пользователю */}
      {cart.length === 0 ? <p>Your cart is empty...</p> :
        <>
          {cart.map(el => (
            <div key={el.id}>
              <span>{el.title} x{el.quantity} </span>
              {/* считаем цену учитывая кол-во товаров округляя до двух знаков после точки */}
              <span style={{color: 'red'}}>€{(el.price * el.quantity).toFixed(2)}</span>
              <button onClick={() => removeFromCart(el.id)} >delete</button>
            </div>
          ))}
          <div>
            <h3>Total price: €{getTotalPrice()}</h3>
          </div>
          <MyButton func={clearCart} variant="danger" text="clear cart" />
        </>
      }
    </div>
  );
}
