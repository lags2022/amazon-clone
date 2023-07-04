import React from "react";
import styles from "../styles/login.module.css";
import Link from "next/link";
import Image from "next/image";

function LoginStyles({ children }) {
  return (
    <>
      <Link
        href="/"
        className="fixed m-2 rounded-lg pl-1 pt-4 flex items-center bg-amazon_blue"
      >
        <Image
          src="https://links.papareact.com/f90"
          width={150}
          height={40}
          className="object-contain h-10 w-36 cursor-pointer"
          alt="title"
        />
      </Link>
      <div className="m-auto shadow-md rounded-3xl bg-slate-50 grid md:grid-cols-2 ">
        <div className="mx-4 items-center justify-center hidden md:flex">
          {/* <div className={styles.cartoonImg}></div>
        <div className={styles.cloud_one}></div>
        <div className={styles.cloud_two}></div> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 793 552"
          >
            <ellipse cx="158" cy="539.7" fill="#e6e6e6" rx="158" ry="12" />
            <path
              fill="#2f2e41"
              d="M121 122c27-11 62-4 95 1 0-6 4-14 0-18-5-5-4-11-1-16 7-15-4-30-14-42a24 24 0 0 0-20-9l-20 2a24 24 0 0 0-21 17c-5 6-7 13-6 19-7 5-8 11-5 17 3 4 3 8 0 12a56 56 0 0 0-8 17Zm653 355H214a19 19 0 0 1-19-19q305-35 598 0a19 19 0 0 1-19 19Z"
            />
            <path
              fill="#3f3d56"
              d="m793 459-598-1 69-116 1-1V84a24 24 0 0 1 23-24h408a24 24 0 0 1 24 24v259Z"
            />
            <path
              fill="#fff"
              d="M288 77a8 8 0 0 0-8 8v234a8 8 0 0 0 8 8h412a8 8 0 0 0 8-8V85a8 8 0 0 0-8-8Z"
            />
            <path
              fill="#2f2e41"
              d="M290 358a3 3 0 0 0-3 2l-22 46a3 3 0 0 0 3 5h449a3 3 0 0 0 3-5l-23-47a3 3 0 0 0-3-1Z"
            />
            <circle cx="492.3" cy="68" r="5" fill="#fff" />
            <path
              fill="#2f2e41"
              d="M448 419a3 3 0 0 0-3 3l-5 20a3 3 0 0 0 3 4h102a3 3 0 0 0 3-4l-7-20a3 3 0 0 0-3-3Zm272-82v5H264l1-1v-4h455z"
            />
            <circle cx="707.3" cy="77.4" r="77.4" fill="#6c63ff" />
            <path
              fill="#fff"
              d="M739 111h-64a4 4 0 0 1-4-4V68a4 4 0 0 1 4-4h64a4 4 0 0 1 5 4v39a4 4 0 0 1-5 4Zm-64-43v39h64V68Z"
            />
            <path
              fill="#fff"
              d="M727 68h-40V50c0-13 9-22 20-22s20 9 20 22Zm-35-4h31V50c0-10-7-17-16-17s-15 7-15 17Z"
            />
            <circle cx="707.3" cy="86.2" r="4.4" fill="#fff" />
            <path
              fill="#e6e6e6"
              d="M653 247H335a6 6 0 0 1-6-6v-79a6 6 0 0 1 6-6h318a6 6 0 0 1 6 6v79a6 6 0 0 1-6 6Zm-318-88a4 4 0 0 0-4 3v79a4 4 0 0 0 4 4h318a4 4 0 0 0 4-4v-79a4 4 0 0 0-4-3Z"
            />
            <circle cx="384.2" cy="198.7" r="24" fill="#e6e6e6" />
            <path
              fill="#e6e6e6"
              d="M440 183a4 4 0 1 0 0 8h189a4 4 0 0 0 0-8Zm0 24a4 4 0 1 0 0 8h81a4 4 0 1 0 0-8Z"
            />
            <path
              fill="#ffb8b8"
              d="m264 208-59 32-1-26c19-4 37-9 54-18l6-16a10 10 0 0 1 18-2 10 10 0 0 1-1 14Z"
            />
            <path
              fill="#2f2e41"
              d="M120 389a12 12 0 0 1 1-9l13-20a23 23 0 0 1 29-8c-5 9-4 18 2 25a118 118 0 0 0-28 19 12 12 0 0 1-17-7Z"
            />
            <path
              fill="#2f2e41"
              d="M266 363a22 22 0 0 1-19 11l-86 1-3-22 38-11-32-25 35-41 63 60a22 22 0 0 1 4 27Z"
            />
            <path
              fill="#2f2e41"
              d="M148 511h-20c-18-124-37-248 18-294l64 10-8 54-36 41Z"
            />
            <path
              fill="#2f2e41"
              d="M166 539a12 12 0 0 1-10-1l-22-3a23 23 0 0 1-7-30c9 6 17 5 24-2 5 11 13 10 21 18a12 12 0 0 1-6 18Z"
            />
            <path
              fill="#ffb8b8"
              d="m196 134-38-9c7-13 7-27 4-42l25-1c1 19 4 36 9 52Z"
            />
            <path
              fill="#6c63ff"
              d="M206 249c-27 19-46 1-61-27 2-16-1-37-7-58a40 40 0 0 1 24-49l32 14c27 22 33 46 23 71Z"
            />
            <path
              fill="#ffb8b8"
              d="m128 152-30 16 53 31 7 19a10 10 0 0 1-5 12 10 10 0 0 1-13-8l-1-13-67-22a16 16 0 0 1-10-10 16 16 0 0 1 6-18l54-37Z"
            />
            <path
              fill="#6c63ff"
              d="M158 155c-13-5-24 1-38 6l-3-40c15-7 28-10 41-4Z"
            />
            <circle cx="172.5" cy="78.1" r="23.8" fill="#ffb8b8" />
            <path fill="#2f2e41" d="M201 75c-24 2-42-1-53-12v-9h51Z" />
          </svg>
        </div>
        <div className="flex flex-col justify-evenly ">
          <div className="text-center py-6 ">{children}</div>
        </div>
      </div>
    </>
  );
}

export default LoginStyles;
