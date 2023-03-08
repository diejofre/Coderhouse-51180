import styles from "./navbar.module.scss";

const Navbar = ({ icono }) => {
  return (
    <div className={styles.container}>
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
      <img src={icono} alt="" width="40" height="40" />
      <p>6</p>
    </div>
  );
};

export default Navbar;
