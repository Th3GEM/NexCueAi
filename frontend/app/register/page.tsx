"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
        }),
      });

      const text = await response.text();

      console.log("API RESPONSE:", text);

      if (response.ok) {
        alert("Account created successfully!");
        router.push("/dashboard");
      } else {
        alert(`Registration failed`);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">

        <h1 className="text-4xl font-bold mb-2">
          Create Account
        </h1>

        <p className="text-slate-400 mb-8">
          Join NexCue AI and unlock smarter conversations
        </p>

        <label className="block mb-2 text-slate-300">
          Full Name
        </label>

        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white mb-5"
        />

        <label className="block mb-2 text-slate-300">
          Email Address
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white mb-5"
        />

        <label className="block mb-2 text-slate-300">
          Password
        </label>

        <div className="relative mb-5">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <label className="block mb-2 text-slate-300">
          Confirm Password
        </label>

        <div className="relative mb-6">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            placeholder="Confirm password"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="absolute right-3 top-3"
          >
            {showConfirmPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-green-600 hover:bg-green-700 transition p-3 rounded-lg font-semibold"
        >
          Create Account
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