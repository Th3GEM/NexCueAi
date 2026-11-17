"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "/api/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem(
          "resetToken",
          data.token
        );

        window.location.href =
          "/reset-password";
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">

        <h1 className="text-4xl font-bold mb-2">
          Forgot Password
        </h1>

        <p className="text-slate-400 mb-8">
          Enter the email associated with your account
        </p>

        <input
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="Enter your email"
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white mb-6"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold"
        >
          Send Reset Link
        </button>

      </div>
    </main>
  );
}