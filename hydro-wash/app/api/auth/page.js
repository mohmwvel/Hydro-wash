"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: isLogin ? "login" : "signup", email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("userId", data.userId); // Save user session
      router.push("/booking"); // Send them to the booking page
    } else {
      setMessage(data.error);
    }
  }

  return (
    <div style={{ padding: "40px", maxWidth: "400px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      {message && <p style={{ color: "red" }}>{message}</p>}
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input name="email" type="email" placeholder="Email" required style={{ padding: "10px" }} />
        <input name="password" type="password" placeholder="Password" required style={{ padding: "10px" }} />
        <button type="submit" style={{ padding: "12px", background: "#4f46e5", color: "white", border: "none" }}>
          {isLogin ? "Login" : "Create Account"}
        </button>
      </form>
      
      <button onClick={() => setIsLogin(!isLogin)} style={{ marginTop: "15px", background: "none", border: "none", color: "blue", cursor: "pointer" }}>
        {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
      </button>
    </div>
  );
}