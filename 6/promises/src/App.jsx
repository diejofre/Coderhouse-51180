import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) =>
      setProductos(res.data)
    );
  }, []);

  console.log(productos);

  return (
    <div>
      <h1>React App</h1>
    </div>
  );
}

export default App;
