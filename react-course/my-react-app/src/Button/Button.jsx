import styles from "./Button.module.css";
function Button() {
  const hadleClick = () => {
    console.log("$1M 🤑💰");
  };

  return (
    <button onClick={hadleClick} className={styles.button}>
      Click Me 😊
    </button>
  );
}

export default Button;
