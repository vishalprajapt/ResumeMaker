import React, { useEffect, useState } from "react";
import axios from "axios";

function index() {
  const [loginType, setLoginType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // get current login type
  useEffect(() => {
    axios
      .get("https://resumebackend-v68m.onrender.com/api/login-type")
      .then((res) => {
        setLoginType(res.data.type);
      })
      .catch(() => {
        setMessage("Failed to load login type");
      });
  }, []);

  const handleSave = async () => {
    setLoading(true);
    setMessage("");

    try {
      await axios.post("https://resumebackend-v68m.onrender.com/api/admin/login-type", {
        type: loginType,
      });
      setMessage("Login type updated successfully ✅");
    } catch (err) {
      setMessage("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Admin Panel</h2>

        <p style={styles.sub}>
          Select which login method should be active
        </p>

        {loginType === null ? (
          <p>Loading...</p>
        ) : (
          <>
            <div style={styles.radioGroup}>
              <label style={styles.radio}>
                <input
                  type="radio"
                  value={0}
                  checked={loginType === 0}
                  onChange={() => setLoginType(0)}
                />
                Manual Login
              </label>

              <label style={styles.radio}>
                <input
                  type="radio"
                  value={1}
                  checked={loginType === 1}
                  onChange={() => setLoginType(1)}
                />
                Firebase Login
              </label>
            </div>

            <button
              onClick={handleSave}
              disabled={loading}
              style={styles.button}
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </>
        )}

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f8",
  },
  card: {
    width: "360px",
    padding: "24px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "10px",
  },
  sub: {
    textAlign: "center",
    color: "#666",
    fontSize: "14px",
    marginBottom: "20px",
  },
  radioGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "20px",
  },
  radio: {
    fontSize: "15px",
    cursor: "pointer",
  },
  button: {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    background: "#2563eb",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
  },
  message: {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "14px",
  },
};

export default index;
