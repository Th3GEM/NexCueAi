"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  id: number;
  fullName: string;
  email: string;
};

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {
      setUser(
        JSON.parse(storedUser)
      );
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    sessionStorage.clear();

    window.location.replace("/login");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Welcome back, {user?.fullName || "User"} 👋
          </p>

          <p className="text-slate-500">
            {user?.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">
            Total Credits
          </h2>

          <p className="text-3xl font-bold">
            100
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">
            Resumes Analyzed
          </h2>

          <p className="text-3xl font-bold">
            0
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">
            Account Type
          </h2>

          <p className="text-3xl font-bold">
            Free
          </p>
        </div>

      </div>

    </main>
  );
}