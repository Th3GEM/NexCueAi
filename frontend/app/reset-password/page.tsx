"use client";

import { useEffect, useState } from "react";

export default function ResetPasswordPage() {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword,
    setShowConfirmPassword] =
    useState(false);

  useEffect(() => {
    const storedToken =
      localStorage.getItem("resetToken");

    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleReset = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      alert(
        "Password must be at least 8 characters"
      );
      return;
    }

    const response = await fetch(
      "/api/reset-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          password,
        }),
      }
    );

    const data = await response.json();

    alert(data.message);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">

        <h1 className="text-4xl font-bold mb-6">
          Reset Password
        </h1>

        <input
          value={token}
          readOnly
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 mb-4 text-slate-400"
        />

        <div className="relative mb-4">
          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="New Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            className="absolute right-3 top-3"
          >
            {showPassword
              ? "🙈"
              : "👁️"}
          </button>
        </div>

        <div className="relative mb-6">
          <input
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
            className="absolute right-3 top-3"
          >
            {showConfirmPassword
              ? "🙈"
              : "👁️"}
          </button>
        </div>

        <button
          onClick={handleReset}
          className="w-full bg-green-600 hover:bg-green-700 transition p-3 rounded-lg font-semibold"
        >
          Reset Password
        </button>

      </div>
    </main>
  );
}