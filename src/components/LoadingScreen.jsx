import { useState, useEffect } from 'react';
import styles from './LoadingScreen.module.css';

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Hello World! />";
    
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1000);
            }

        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className={styles.container}>
        <div className={styles.text}>
            {text} <span className={styles.cursor}> | </span>
        </div>
        <div className={styles.loadingBar}>
            <div className={styles.loading}></div>
        </div>   
    </div>
    );
}