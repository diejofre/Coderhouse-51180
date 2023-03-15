const ProductItem = ({ producto }) => {
  return (
    <div>
      <h3>{producto.title}</h3>
      <img src={producto.image} alt="" width={200} height={200} />
      <h4>{producto.description}</h4>
    </div>
  );
};

export default ProductItem;
