import styles from './productPage.module.css';

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IProduct } from '../products/types/types';
import Loader from "../loader/Loader";

const initialProduct: IProduct = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0
  }
};

export default function ProductPage(): JSX.Element {
  const [product, setProduct] = useState<IProduct>(initialProduct);
  // useParams - это хук из библиотеки react-router для того чтобы забирать данные из адресной строки
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then((data: IProduct) => setProduct(data));
    }, 1500);
  }, [id]);

  return (
    <div className={styles.productPage}>
      {product.title ? (
        <>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}€</p>
          <img width={200} src={product.image} alt="product.image" />
          <div>
            <Link to='/lesson-14'>back to main page</Link>
          </div>
        </>
      ) : (
        <div className={styles.loaderWrapper}>
          <Loader />
        </div>
      )}
    </div>
  );
}
