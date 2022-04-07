import { useState } from "react";
import styles from "./NavButton.module.scss";
import Link from "next/link";

function NavButton() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div
        className={styles.NavButton__overlay}
        style={{
          display: isOpen ? "block" : "none",
        }}
      ></div>
      <div
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
        className={styles.NavButton}
      >
        <ul
          className={styles.NavButton__list}
          style={{
            display: isOpen ? "block" : "none",
          }}
        >
          <li className={styles.NavButton__listItem}>
            <p>Add Project</p>
            <Link href="/projects/add">
              <i
                className={`${styles.NavButton__listItem__icon} material-icons`}
              >
                add
              </i>
            </Link>
          </li>
          <li className={styles.NavButton__listItem}>
            <p>Add Project</p>
            <Link href="/projects/add">
              <i
                className={`${styles.NavButton__listItem__icon} material-icons`}
              >
                add
              </i>
            </Link>
          </li>
        </ul>
        <p className={styles.NavButton__text}>Close</p>
        <div className={`${styles.NavButton__icon} material-icons`}>
          {isOpen ? "close" : "add"}
        </div>
      </div>
    </>
  );
}

export default NavButton;
