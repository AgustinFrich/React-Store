import { useEffect, useState } from "react";
import { useCart } from "../hooks/CartProvider";
import "./Styles/Product.css";

const Product = ({ name, price, img }) => {
  const [quantity, setQuantity] = useState(1);

  const { addItem } = useCart();
  useEffect(() => {
    handleBtnText();
  }, [quantity]);

  const handleMinus = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const [btnText, setBtnText] = useState();

  const handleBtnText = () => {
    if (quantity === 1) {
      setBtnText("Add to Cart");
    } else {
      setBtnText("Add to cart $" + quantity * price);
    }
  };

  return (
    <div className="Product-Card ">
      <img src={img} alt="image" className="Product-Image"></img>
      <h4>{name}</h4>
      <h4>${price}</h4>
      <div className="row">
        <div className="col-xs-2"></div>
        <div className="col-xs-3">
          <button className="Product-Minus" onClick={handleMinus}>
            -
          </button>
        </div>
        <div className="col-xs-2">
          <p>{quantity}</p>{" "}
        </div>

        <div className="col-xs-2">
          <button className="Product-Plus" onClick={handlePlus}>
            +
          </button>{" "}
        </div>
        <div className="col-xs-3"></div>
      </div>
      <br />
      <button
        onClick={() => {
          addItem({ name: name, price: price, quantity: quantity });
        }}
        className="btn btn-primary"
      >
        {btnText}
      </button>
    </div>
  );
};

export default Product;
