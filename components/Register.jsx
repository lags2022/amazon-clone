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
import { toast, Toaster } from "react-hot-toast";
import clsx from "clsx";
import ErrorForm from "./ErrorForm";

function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
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
    let email = form.email.trim();
    setShowError(true);
    if (
      !errors.username &&
      !errors.email &&
      !errors.password &&
      !errors.cpassword
    ) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, form.password)
        .then((userCredential) => {
          return updateProfile(userCredential.user, {
            displayName: form.username,
          });
        })
        .then(() => {
          toast.success("User created");
          router.push("/login");
        })
        .catch((error) => {
          toast.error("Data missing");
          // toast.error(error.message);
          setTimeout(() => {
            setShowError(false);
          }, 4000);
        })
        .finally(() => setLoading(false));
    } else {
      setTimeout(() => {
        setShowError(false);
      }, 4000);
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
              disabled={loading}
            />
            <span className={styles.spantext}>
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
          <div className="relative flex items-center justify-center">
            {errors.username && showError && (
              <ErrorForm formError={errors.username} />
            )}
          </div>
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
              disabled={loading}
            />
            <span className={styles.spantext}>
              <FontAwesomeIcon icon={faAt} />
            </span>
          </div>
          <div className="relative flex items-center justify-center">
            {errors.email && showError && (
              <ErrorForm formError={errors.email} />
            )}
          </div>
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
              disabled={loading}
            />
            <span
              className={styles.spantext}
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              <FontAwesomeIcon icon={show.password ? faEyeSlash : faEye} />
            </span>
          </div>
          <div className="relative flex items-center justify-center">
            {errors.password && showError && (
              <ErrorForm formError={errors.password} />
            )}
          </div>
        </div>
        <div>
          <div className={styles.inputg}>
            <input
              className={styles.inputext}
              type={`${show.cpassword ? "text" : "password"}`}
              name="cpassword"
              placeholder="Confirm password"
              value={form.cpassword}
              disabled={loading}
              onChange={handleChange}
            />
            <span
              className={styles.spantext}
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
            >
              <FontAwesomeIcon icon={show.cpassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <div className="relative flex items-center justify-center">
            {errors.cpassword && showError && (
              <ErrorForm formError={errors.cpassword} />
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          onClick={handleSubmit}
          className={clsx(
            `button`,
            loading &&
              "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
          )}
        >
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
      <Toaster />
    </div>
  );
}

export default Register;
