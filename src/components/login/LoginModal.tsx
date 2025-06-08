import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const modalStyle: React.CSSProperties = {
  backgroundColor: "white",
  padding: "3rem",
  borderRadius: "16px",
  minWidth: "400px",
  width: "90%",
  maxWidth: "480px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  marginBottom: "1.5rem",
  padding: "0.75rem 1rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
  outline: "none",
  boxSizing: "border-box",
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem",
  backgroundColor: "#254ACA",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px",
};

export default function LoginModal() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(loginId, password);
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2 style={{ marginBottom: "2rem", textAlign: "center" }}>도담도담으로 로그인하기</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="아이디"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}