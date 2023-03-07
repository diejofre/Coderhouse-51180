import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
    </div>
  );
};

export default Navbar;
