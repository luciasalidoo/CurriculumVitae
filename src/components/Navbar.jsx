
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : "";
    }, [menuOpen]);

    return <nav className={styles.navbar}>
        <div className={styles.container}>
            <div className={styles.navContent}>
                <a href="#home" className={styles.logo}> 
                    {" "}L{" "}
                </a>

                <div className={styles.menuIcon} onClick={() => setMenuOpen(prev => !prev)}>
                    &#9776;
                </div>
                
                <div className={styles.navLinks}>
                    <a href="#about" className={styles.link}> 
                        About 
                    </a>
                    <a href="#home" className={styles.link}> 
                        Home 
                    </a>
                    <a href="#projects" className={styles.link}> 
                        Projects 
                    </a>
                    <a href="#contact" className={styles.link}> 
                        Contact 
                    </a>
                </div>
            </div>
        </div>
    </nav>
}