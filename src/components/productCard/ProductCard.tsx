import { Link } from "react-router-dom";
import styles from './productCard.module.css';
import { useCart } from "../../context/CartContext";
import MyButton from "../myButton/MyButton";

interface IProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, title, price, image }: IProductCardProps): JSX.Element {
  const { addToCart } = useCart();

  return (

    <div className={styles.shopContainerCard} key={id}>
      <h4>{title.length < 20 ? title : title.slice(0, 20) + '...'}</h4>
      <p>Price: {price}€</p>
      <div className={styles.imgWrapper}>
        <img src={image} />
      </div>
      <div>
        <MyButton func={() => addToCart({ id: id, title: title, price: price, quantity: 1 })} text="add to cart"/>
        <Link key={id} to={String(id)}> <button>to product</button></Link>
      </div>
    </div>

  );
}
