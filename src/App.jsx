import "./App.css";
import NavBar from "./Components/NavBar";
import ProductGrid from "./Components/ProductGrid";
import CartContextProvider from "./hooks/CartProvider";

const App = () => {
  return (
    <CartContextProvider>
      <div className="App">
        <br />
        <NavBar />

        <hr />
        <ProductGrid />
      </div>
    </CartContextProvider>
  );
};

export default App;
