import { useState, useEffect } from "react";
import styles from "./Home.module.css";

function Home() {
  const [showText, setShowText] = useState(true);

  function blink() {
    setShowText(false);
  }

  useEffect(() => {
    setInterval(() => {
      blink();
    }, 50000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 1000);
  }, [blink]);

  return (
    <div className={styles.homediv}>
      {showText && <h1>ESTOU DE OLHO EM VOCÊ</h1>}
    </div>
  );
}

export default Home;
