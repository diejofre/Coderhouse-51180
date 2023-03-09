import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(1);
  const [producto, setProducto] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${count}`)
      .then((res) => res.json())
      .then((res) => setProducto(res));
  }, [count]);

  console.log(producto);

  return (
    <div>
      <h1>My App</h1>
      <Counter count={count} setCount={setCount} />
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} />
      <h3>{producto.description}</h3>
    </div>
  );
}

export default App;
