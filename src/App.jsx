import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from "./components/sections/Home";
import styles from "./App.module.css";
import "./colors.css";
import "./index.css";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
        <div className={`
          ${styles.container}
          ${isLoaded ? styles.visible : styles.hidden}
        `}>
         <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
         <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
         <Home />
        </div>
    </>
  )
}

export default App
