import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "./Firebasedata";

function FirebaseForm({onClose}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Email Login / Signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isSignup) {
        const res = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        alert("Signup Successful ✅ " + res.user.email);
      } else {
        const res = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        alert("Login Successful ✅ " + res.user.email);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      alert("Google Login Successful ✅ " + result.user.email);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="firebase-wrapper">
       <span className="close-icon" onClick={onClose}>×</span>
      <div className="firebase-card">
        <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading
              ? "Please wait..."
              : isSignup
              ? "Sign Up"
              : "Login"}
          </button>
        </form>

        <div className="divider">OR</div>

        <button className="google-btn" onClick={handleGoogleLogin}>
          Continue with Google
        </button>

        <p className="toggle-text">
          {isSignup ? "Already have an account?" : "New user?"}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? " Login" : " Sign up"}
          </span>
        </p>

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default FirebaseForm;
