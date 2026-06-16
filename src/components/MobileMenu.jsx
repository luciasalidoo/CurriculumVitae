
import styles from './MobileMenu.module.css';

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
      <div
        className={`${styles.menuOverlay} ${menuOpen ? styles.menuOpen : styles.menuClosed}`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className={styles.closeButton}
          aria-label="Close Menu"
        >
          &times;
        </button>

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className={`${styles.menuLink} ${menuOpen ? styles.menuLinkVisible : styles.menuLinkHidden}`}
        >
          About
        </a>
        <a 
          href="#home" 
          onClick={() => setMenuOpen(false)} 
          className={`${styles.menuLink} ${menuOpen ? styles.menuLinkVisible : styles.menuLinkHidden}`}>
          Home
        </a>
        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className={`${styles.menuLink} ${menuOpen ? styles.menuLinkVisible : styles.menuLinkHidden}`}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className={`${styles.menuLink} ${menuOpen ? styles.menuLinkVisible : styles.menuLinkHidden}`}
        >
          Contact
        </a>
      </div>
    );
}