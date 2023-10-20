
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mainChar from "../../assets/image/main_char.png";
import styles from "./splash.module.css";

export default function Splash() {
    const navigate = useNavigate();

    useEffect(() => {
      setTimeout(() => {
        navigate("/main");
      }, 2000);
    }, []);

  return (
    <div className={styles["splash-container"]}>
      <h1 className={styles["a11y-hidden"]}>splash 화면</h1>
      <img src={mainChar} alt="메인캐릭터" className={styles["splash-char"]} />
      <div className={styles["splash-logo"]}>
        Game <br /> Buddy
      </div>
    </div>
  );
}

