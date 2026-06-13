import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import styles from "./App.module.css";
import "./colors.css";
import "./index.css";


function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
        <div className={`
          ${styles.container}
          ${isLoaded ? styles.visible : styles.hidden}
        `}>
         <Navbar />
        </div>
    </>
  )
}

export default App
