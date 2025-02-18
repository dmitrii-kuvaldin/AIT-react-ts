import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Homework08 from "./homeworks/homework08/Homework08";
import Layout from "./layout/Layout";
import Lesson05 from "./lessons/lesson05/Lesson05";
import FetchFox from "./components/fetchFox/FetchFox";
import Lesson08 from "./lessons/lesson08/Lesson08";
import NoPage from "./components/noPage/NoPage";
import HomePage from "./components/homePage/HomePage";
import Lesson04 from "./lessons/lesson04/Lesson04";
import Lesson09 from "./lessons/lesson09/Lesson09";
import Lesson11 from "./lessons/lesson11/Lesson11";
import Lesson12 from "./lessons/lesson12/Lesson12";
import GenderForm from "./components/genderForm/GenderForm";
import Lesson13 from "./lessons/lesson13/Lesson13";
import Lesson14 from "./lessons/lesson14/Lesson14";
import ProductPage from "./components/productPage/ProductPage";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
import Lesson16 from "./lessons/lesson16/Lesson16";
// импортируем Provider из react-redux
import { Provider } from "react-redux";
// store.ts забираем из папки app
import { store } from "./app/store";
import Login from "./features/auth/login/Login";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Youtube from "./components/youtube/Youtube";

function App() {

  const routes = [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: 'fetch-fox',
      element: <FetchFox />
    },
    {
      path: 'gender-form',
      element: <GenderForm />
    },
    {
      path: 'cart',
      element: <Cart />
    },
    {
      path: 'products',
      element: <Products />
    },
    {
      path: 'products/:id',
      element: <ProductPage />
    },
    {
      path: 'youtube',
      element: <Youtube />
    },
  ];

  return (
    // ! обернули все приложение в компонент Provider из Redux и передали ему в качестве props store
    <Provider store={store}>
      <CartProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
            {/*  дополнительная оптимизация: делаем map() по объекту с ключами/ значениями */}
              {routes.map(el => (
                <Route key={el.path} path={el.path} element={<ProtectedRoute outlet={el.element} />} />
              ))}
              <Route path="login" element={<Login />} />
              <Route path="lesson-1" element={<h2>Lesson 1</h2>} />
              <Route path="lesson-2" element={<h2>Lesson 2</h2>} />
              <Route path="lesson-3" element={<h2>Lesson 3</h2>} />
              <Route path="lesson-4" element={<Lesson04 />} />
              <Route path="lesson-5" element={<Lesson05 />} />
              <Route path="lesson-6" element={<h2>Lesson 6</h2>} />
              <Route path="lesson-7" element={<h2>Lesson 7</h2>} />
              <Route path="lesson-8" element={<Lesson08 />} />
              <Route path="lesson-9" element={<Lesson09 />} />
              <Route path="lesson-10" element={<h2>Lesson 10. react practice ⚡️</h2>} />
              <Route path="lesson-11" element={<Lesson11 />} />
              <Route path="lesson-12" element={<Lesson12 />} />
              <Route path="lesson-13" element={<Lesson13 />} />
              <Route path="lesson-14" element={<Lesson14 />} />
              <Route path="lesson-16" element={<Lesson16 />} />
              <Route path="lesson-14/:id" element={<ProductPage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </CartProvider>
    </Provider>
  );
}

export default App;
