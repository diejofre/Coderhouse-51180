const Counter = ({ count, setCount }) => {
  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={restar}>-</button>
      {/* <button onClick={() => setCount(0)}>Resetear</button> */}
      <button onClick={sumar}>+</button>
    </div>
  );
};

export default Counter;
