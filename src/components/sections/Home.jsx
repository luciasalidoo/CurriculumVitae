import styles from "./Home.module.css";

export const Home = () => {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.headingContainer}>
        <h1 className={styles.headingText}>Hi, I'm Lucía</h1>

        <p className={styles.paragraphText}>
          I'm a software developer with a strong interest in Bioinformatics and
          Cybersecurity. I enjoy tackling challenging projects, learning new
          technologies and applying my skills to solve real-world problems. I'm
          always looking for opportunities to grow as a developer and expand my
          knowledge in these fields.
        </p>

        <div className={styles.buttonContainer}>
          <a
            href="#Projects"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded font-medium transition relative overflow-hidden hover:shadow-[0_0_15px_rgba()   ]"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};
