import styles from "./NavButton.module.scss";

function NavButton() {
  return (
    <div className={styles.NavButton}>
      <div className={`${styles.NavButton__icon} material-icons`}>add</div>
    </div>
  );
}

export default NavButton;
