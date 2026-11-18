"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] =
    useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem(
          "token",
          data.token
        );

        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        alert("Login successful!");

        router.push("/dashboard");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">

        <h1 className="text-4xl font-bold mb-2">
          Welcome Back
        </h1>

        <p className="text-slate-400 mb-8">
          Login to NexCue AI
        </p>

        <label className="block mb-2 text-slate-300">
          Email Address
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="Enter email"
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white mb-5"
        />

        <label className="block mb-2 text-slate-300">
          Password
        </label>

        <div className="relative mb-4">
          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            placeholder="Enter password"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
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

        <div className="text-right mb-5">
          <a
            href="/forgot-password"
            className="text-blue-400 hover:text-blue-300"
          >
            Forgot Password?
          </a>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg font-semibold"
        >
          Login
        </button>

        <button className="w-full mt-4 bg-white text-black p-3 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-slate-100 transition">
          <Image
            src="/google.svg"
            alt="Google"
            width={20}
            height={20}
          />
          Continue with Google
        </button>

      </div>
    </main>
  );
}