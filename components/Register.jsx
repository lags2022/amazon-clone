import React from "react";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Link from "next/link";
import { app as firebaseApp } from "../firebase_db";
import styles from "../styles/Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAt,
  faEyeSlash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { validRegister } from "@/services/validations";
import { useRouter } from "next/router";

function Register() {
  const router = useRouter();
  const auth = getAuth(firebaseApp);
  const [form, setform] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [show, setShow] = useState({
    password: false,
    cpassword: false,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // alert("se registro");
    let email = form.email.trim();

    if (Object.values(errors).every((err) => err === "")) {
      createUserWithEmailAndPassword(auth, email, form.password)
        .then((userCredential) => {
          return updateProfile(userCredential.user, {
            displayName: form.username,
          });
        })
        .catch((error) => console.log(error));
      router.push("/login");
    }
  };

  const handleChange = (evt) => {
    setform({
      ...form,
      [evt.target.name]: evt.target.value,
    });
    setErrors(
      validRegister({
        ...form,
        [evt.target.name]: evt.target.value,
      })
    );
  };
  return (
    <div className="divform_general">
      <h1 className="h1form_general">Register</h1>
      <form action="login" onSubmit={handleSubmit} className="form_general">
        <div>
          <div className={styles.inputg}>
            <input
              className={styles.inputext}
              type="email"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
            />
            <span className={styles.spantext}>
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
          <small className={styles.smalltext}>{errors.username}</small>
        </div>
        <div>
          <div className={styles.inputg}>
            <input
              className={styles.inputext}
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <span className={styles.spantext}>
              <FontAwesomeIcon icon={faAt} />
            </span>
          </div>
          <small className={styles.smalltext}>{errors.email}</small>
        </div>
        <div>
          <div className={styles.inputg}>
            <input
              className={styles.inputext}
              type={`${show.password ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
            <span
              className={styles.spantext}
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              <FontAwesomeIcon icon={show.password ? faEyeSlash : faEye} />
            </span>
          </div>
          <small className={styles.smalltext}>{errors.password}</small>
        </div>
        <div>
          <div className={styles.inputg}>
            <input
              className={styles.inputext}
              type={`${show.cpassword ? "text" : "password"}`}
              name="cpassword"
              placeholder="Confirm password"
              value={form.cpassword}
              onChange={handleChange}
            />
            <span
              className={styles.spantext}
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
            >
              <FontAwesomeIcon icon={show.cpassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <small className={styles.smalltext}>{errors.cpassword}</small>
        </div>

        <button type="submit" onClick={handleSubmit} className="button">
          Register
        </button>
      </form>
      <div className="flex space-x-2 justify-center">
        <p className="text-slate-400">Have an account?</p>
        <Link
          className="text-blue-400 font-semibold hover:text-blue-600"
          href="/login"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Register;
