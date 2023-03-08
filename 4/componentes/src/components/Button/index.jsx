import styles from "./button.module.scss";

const Button = ({ texto }) => {
  return <button className={styles.btn}>{texto}</button>;
};

export default Button;
