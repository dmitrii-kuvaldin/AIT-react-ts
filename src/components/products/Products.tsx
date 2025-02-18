import { useEffect } from "react";
import styles from './products.module.css';
import ProductCard from "../productCard/ProductCard";
import Cart from "../cart/Cart";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loadLimitProducts, loadProducts } from "../../features/products/productsActions";
import MyInput from "../myInput/MyInput";
import MyButton from "../myButton/MyButton";
import { useFormik } from "formik";

export default function Products(): JSX.Element {
  const dispatch = useAppDispatch()

  const {products: reduxProducts, error, isLoading} = useAppSelector(state => state.products)


  const formik = useFormik({
    initialValues: {
      limit: ''
    } as { limit: string;},
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(loadLimitProducts(values.limit))
      resetForm();
    }
  });


  useEffect(() => {
    dispatch(loadProducts())
  }, []);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <MyInput name="limit" formik={formik} label="amount of products:" placeholder="choose your limit"/>
        <MyButton text="limit" type="submit"/>
      </form>
      {/* <Cart /> */}
      <div className={styles.shopContainer}>
        {/* итерируемся по данным из redux */}
        {reduxProducts.map(product => (
          <div key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </>
  );
}
