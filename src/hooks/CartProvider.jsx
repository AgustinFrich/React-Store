import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    calcTotal();
  }, [items]);

  const addItem = (item) => {
    items.map((it) => {
      if (it.name === item.name) {
        item.quantity += it.quantity;
      }
    });

    removeItem(item);
    setItems((curr) => [...curr, item]);
  };

  const removeItem = (item) => {
    setItems(items.filter((it) => it.name !== item.name));
  };

  const calcTotal = () => {
    setTotalQuantity(items.reduce((acc, curr) => acc + curr.quantity, 0));
    setTotal(items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0));
  };

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, total, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
