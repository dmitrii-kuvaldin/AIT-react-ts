import { createContext, useContext, useState } from "react";

interface ICartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}


interface ICartContextType {
  cart: ICartItem[],
  addToCart: (product: ICartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}


export const CartContext = createContext<ICartContextType | undefined>(undefined);



export const CartProvider = ({ children }: { children: React.ReactNode; }) => {

  const [cart, setCart] = useState<ICartItem[]>([]);

  const addToCart = (product: ICartItem) => {
    setCart(prevCart => {
      // проверяем есть ли такой продукт в корзине сравнив id переданного продукта с id внутри массива из корзины
      const productExist = prevCart.find(item => item.id === product.id);
      // если продукт уже существует мы на одно значение увеличиваем его кол-во и возвращаем новый массив с изменениями
      if (productExist) {
        return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      // если продукта нет, то копируем старый массив с добавлением нового продукта выставив кол-во 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    // в метод filter() - мы передаем условие для фильтрации
    // в ответ получаем новый массив элементов
    // если элемент удовлетворяет условию - он попадает в новый массив
    // если ни один из элементов не совпал с условием - мы получим пустой массив
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };


  const clearCart = () => {
    setCart([]);
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('no such context 🫣');
  }
  return context;
}

