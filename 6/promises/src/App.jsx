import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import ProductItem from "./components/ProductItem";

const URL_API = "https://fakestoreapi.com/products";

function App() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const res = await axios(URL_API);
      setProductos(res.data);
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  useEffect(() => {
    getProductos();
    // axios("https://fakestoreapi.com/products").then((res) =>
    //   setProductos(res.data)
    // ).catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>React App</h1>
      {productos.map((producto, i) => (
        <ProductItem producto={producto} key={producto.id} />
      ))}
    </div>
  );
}

export default App;
