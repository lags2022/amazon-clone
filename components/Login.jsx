import Image from "next/image";
import Link from "next/link";
import LoginStyles from "./LoginStyles";
import { useState, useEffect } from "react";
import Register from "./Register";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app as firebaseApp } from "../firebase_db";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Form.module.css";
import { validLogin } from "../services/validations";
import ErrorForm from "./ErrorForm";
import { toast, Toaster } from "react-hot-toast";
import clsx from "clsx";

function Login() {
  const providers = [
    { name: "google", svg: "./assets/google.svg" },
    // { name: "facebook", svg: "./assets/facebook.svg" },
    { name: "github", svg: "./assets/github.svg" },
  ];

  const auth = getAuth(firebaseApp);
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [register, setRegister] = useState(false);

  useEffect(() => {
    user && router.push("/");
  }, [user]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const emailChanged = form.email.trim();
    setLoading(true);
    setShowError(true);
    signInWithEmailAndPassword(auth, emailChanged, form.password)
      .then((userCredential) => setUser(userCredential.user.displayName))
      .then(() => {
        toast.success("User authenticated");
      })
      .catch(() => {
        toast.error("User not found");
        setTimeout(() => {
          setShowError(false);
        }, 4000);
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (evt) => {
    setform({
      ...form,
      [evt.target.name]: evt.target.value,
    });
    setErrors(
      validLogin({
        ...form,
        [evt.target.name]: evt.target.value,
      })
    );
  };

  return (
    <LoginStyles>
      {register ? (
        <Register setRegister={setRegister} />
      ) : (
        <div className="divform_general">
          <h1 className="h1form_general">Login</h1>
          <form
            action="login"
            onSubmit={handleSubmit}
            className="form_general "
          >
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
              {/* <small className={styles.smalltext}>{errors.email}</small> */}
            </div>
            <div>
              <div className={styles.inputg}>
                <input
                  className={styles.inputext}
                  type={`${show ? "text" : "password"}`}
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  disabled={loading}
                />
                <span
                  className={styles.spantext}
                  onClick={() => setShow(!show)}
                >
                  <FontAwesomeIcon icon={show ? faEyeSlash : faEye} />
                </span>
              </div>
              <div className="relative flex items-center justify-center">
                {errors.password && showError && (
                  <ErrorForm formError={errors.password} />
                )}
              </div>
              {/* <small className={styles.smalltext}>{errors.password}</small> */}
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
              className={clsx(
                `button`,
                loading &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
              )}
            >
              Login
            </button>
          </form>

          <div className="flex justify-evenly">
            {providers.map((prov, i) => (
              <button
                key={i}
                disabled={loading}
                onClick={() => {
                  // signIn(prov.name, { callbackUrl: "http://localhost:3000" })
                  setLoading(true);
                  signIn(prov.name, {
                    callbackUrl: "https://amazon-clone-lags2022.vercel.app/",
                  })
                    .then(() => toast.success("User authenticated"))
                    .catch(() => toast.error("User not found"))
                    .finally(() => setLoading(false));
                }}
              >
                <Image width={30} height={30} src={prov.svg} alt={prov.name} />
              </button>
            ))}
          </div>
          <div className="flex space-x-2 justify-center">
            <p className="text-slate-400">Dont have an account yet?</p>
            <Link
              className="text-blue-400 font-semibold hover:text-blue-600"
              href="/register"
              disabled={loading}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
      <Toaster />
    </LoginStyles>
  );
}

export default Login;
