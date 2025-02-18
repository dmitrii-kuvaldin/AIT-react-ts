import { NavLink, Outlet } from "react-router-dom";
import styles from './layout.module.css';
import { useCart } from "../context/CartContext";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { loginToken } from "../features/auth/authActions";
import { logoutUser } from "../features/auth/authSlice";
import Loader from "../components/loader/Loader";

export default function Layout() {
  const dispatch = useAppDispatch();

  const { user, isLoading } = useAppSelector(state => state.auth);

  const { cart } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleLogout = () => {
    // удаляем токен
    localStorage.removeItem('token');
    // чистим стейт в redux
    dispatch(logoutUser());
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    // проверяем наличие token в браузере
    if (token && token.length > 0) {
      dispatch(loginToken(token));
    }
  }, []);

  return (
    <>
      <header className={styles.header}>
        {!isLoading && <>
          <nav>
            {user.id ? <>
              <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'/'}>home</NavLink>
              <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'products'}>products</NavLink>
              <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'cart'}>cart</NavLink>
              <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'youtube'}>youtube</NavLink>
              <NavLink onClick={handleLogout} to='login'>logout</NavLink>
            </> : <>
              <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'login'}>login</NavLink>
            </>}
          </nav>
          <div>
            {user.id ? <>
              <span className={styles.userInfo}>{user.firstName}</span>
              <span>Cart: €{getTotalPrice()}</span>
            </> : <></>}
          </div>
        </>}
      </header>
      <main className={styles.main}>
        {isLoading ? <Loader /> : <Outlet />}
        {/* если данные загружаются показываем loader, а если нет маршруты из routing */}
      </main>
      <footer className={styles.footer}>
        footer
      </footer>
    </>
  );
}

