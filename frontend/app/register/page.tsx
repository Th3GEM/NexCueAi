import Image from "next/image";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">

        <h1 className="text-4xl font-bold text-white mb-2">
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
          placeholder="Enter your full name"
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2 text-slate-300">
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2 text-slate-300">
          Password
        </label>

        <input
          type="password"
          placeholder="Create a password"
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="w-full bg-green-600 hover:bg-green-700 transition p-3 rounded-lg font-semibold">
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