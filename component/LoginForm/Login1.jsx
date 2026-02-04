import React, { useState } from 'react';

// Tabs logic
const Tabs = ({ children, activeTab, onChange }) => (
  <div className="tabs-wrapper">
    <div className="tab-header">
      {React.Children.map(children, (child) => (
        <div
          className={`tab-item ${activeTab === child.props.label ? 'active' : ''}`}
          onClick={() => onChange(child.props.label)}
        >
          {child.props.label}
        </div>
      ))}
    </div>
    <div className="tab-content">
      {React.Children.map(children, (child) =>
        child.props.label === activeTab ? child : null
      )}
    </div>
  </div>
);

const Tab = ({ children }) => <>{children}</>;

function Login1({ onClose }) {
  const [currentTab, setCurrentTab] = useState('Register');

  // 🔹 Register form state
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  // 🔹 Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  // Handle register input change
  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData({
      ...registerData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle login input change
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  // Submit handlers
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
     localStorage.setItem("MyPofile",JSON.stringify(registerData))
     window.location.reload();
     onClose()

  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // console.log('Login Data 👉', loginData);
     localStorage.setItem("MyPofile",JSON.stringify(loginData))
     window.location.reload();
     onClose()
  };

  return (
    <div className="login-container">
      <span className="close-icon" onClick={onClose}>×</span>

      <div className="auth-card">
        <Tabs activeTab={currentTab} onChange={setCurrentTab}>

          {/* REGISTER */}
          <Tab label="Register">
            <form className="auth-form" onSubmit={handleRegisterSubmit}>
              <input
                type="text"
                name="name"
                value={registerData.name}
                onChange={handleRegisterChange}
                placeholder="Full Name *"
                className="themed-input"
              />

              <input
                type="email"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                placeholder="Email Address *"
                className="themed-input"
              />

              <div className="phone-input-group">
                <div className="country-box">+91</div>
                <input
                  type="tel"
                  name="phone"
                  value={registerData.phone}
                  onChange={handleRegisterChange}
                  placeholder="Phone Number *"
                  className="themed-input"
                />
              </div>

              <input
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                placeholder="Password *"
                className="themed-input"
              />

              <input
                type="password"
                name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleRegisterChange}
                placeholder="Confirm Password *"
                className="themed-input"
              />

              <div className="consent-row">
                <input
                  type="checkbox"
                  name="terms"
                  checked={registerData.terms}
                  onChange={handleRegisterChange}
                />
                <label>I agree to the terms and conditions *</label>
              </div>

              <button type="submit" className="submit-btn">
                Register
              </button>
            </form>
          </Tab>

          {/* LOGIN */}
          <Tab label="Log In">
            <form className="auth-form" onSubmit={handleLoginSubmit}>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                placeholder="Email Address"
                className="themed-input"
              />

              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="Password"
                className="themed-input"
              />

              <button type="submit" className="submit-btn">
                Log In
              </button>
            </form>
          </Tab>

        </Tabs>
      </div>
    </div>
  );
}

export default Login1;
