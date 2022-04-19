import React, { useEffect, useState } from "react";
import { useCart } from "../hooks/CartProvider";
import "./Styles/CartDropDown.css";

export const CartDropDown = () => {
  const { items, removeItem, total } = useCart();
  const [active, setActive] = useState(false);
  const [clase, setClase] = useState();

  useEffect(() => {
    console.log(active);
    if (active) setClase("CartDropDown-Active");
    else setClase("CartDropDown-UnActive");
  }, [active]);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <button onClick={handleClick}>Show {items.length}</button>
      <div className={clase}>
        <ul className="CartDropDown-List">
          {items.map((it, key) => {
            return (
              <li className="CartDropDown-Element" key={key}>
                <div className="row">
                  <div className="col-xs-1">
                    <button onClick={() => removeItem({ name: it.name })}>
                      x
                    </button>
                  </div>
                  <div className="col-xs-2">{it.quantity}</div>
                  <div className="col-xs-6">{it.name}</div>
                  <div className="col-xs-3">${it.price}</div>
                </div>
              </li>
            );
          })}
        </ul>
        <p>${total}</p>
      </div>
    </>
  );
};
