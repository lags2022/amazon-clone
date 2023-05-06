import React from "react";
import styles from "../styles/login.module.css";

function LoginStyles({ children }) {
  return (
    <div className="m-auto rounded-3xl bg-slate-300 w-5/6 sm:w-4/6 h-3/4 grid lg:grid-cols-2 ">
      {/* <img src="./assets/login.svg" alt="" /> */}
      <div className={styles.imgStyle}>
        <div className={styles.cartoonImg}></div>
        <div className={styles.cloud_one}></div>
        <div className={styles.cloud_two}></div>
      </div>
      <div className="flex flex-col max-lg:rounded-3xl lg:rounded-r-3xl justify-evenly bg-slate-50 shadow-md">
        <div className="text-center py-10">{children}</div>
      </div>
    </div>
  );
}

export default LoginStyles;
