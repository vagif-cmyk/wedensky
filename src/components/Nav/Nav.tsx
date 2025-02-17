import clsx from "clsx";
import AddIcon from "../svg/AddIcon";
import BookmarksIcon from "../svg/BookmarksIcon";
import styles from "./Nav.module.css";
import HomeIcon from "../svg/HomeIcon";
import CrownIcon from "../svg/CrownIcon";
import ProfileIcon from "../svg/ProfileIcon";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <button className={styles.navBtn}>
        <AddIcon />
      </button>
      <button className={styles.navBtn}>
        <BookmarksIcon />
      </button>
      <button className={clsx(styles.navBtn, styles.active)}>
        <HomeIcon />
      </button>
      <button className={styles.navBtn}>
        <CrownIcon />
      </button>
      <button className={styles.navBtn}>
        <ProfileIcon />
      </button>
    </nav>
  );
};

export default Nav;
