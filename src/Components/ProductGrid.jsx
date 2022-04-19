import Product from "./Product";
import "./Styles/ProductGrid.css";
const ProductGrid = () => {
  const products = [
    { name: "Shoe 1", price: 300, img: "zapato_1.jpg" },
    { name: "Shoe 2", price: 360, img: "zapato_2.jpg" },
    { name: "Shoe 3", price: 150, img: "zapato_3.jpg" },
    { name: "Shoe 2", price: 360, img: "zapato_2.jpg" },
    { name: "Shoe 1", price: 300, img: "zapato_1.jpg" },
    { name: "Shoe 3", price: 150, img: "zapato_3.jpg" },
    { name: "Shoe 2", price: 360, img: "zapato_2.jpg" },
    { name: "Shoe 3", price: 150, img: "zapato_3.jpg" },
    { name: "Shoe 1", price: 300, img: "zapato_1.jpg" },
    { name: "Shoe 1", price: 300, img: "zapato_1.jpg" },
    { name: "Shoe 3", price: 150, img: "zapato_3.jpg" },
    { name: "Shoe 2", price: 360, img: "zapato_2.jpg" },
  ];

  return (
    <div className="Product-Grid">
      {products.map((product, key) => {
        return (
          <Product
            key={key}
            name={product.name}
            price={product.price}
            img={product.img}
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;
