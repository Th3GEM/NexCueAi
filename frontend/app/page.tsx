export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center">

      <h1 className="text-6xl font-bold text-blue-500">
        NexCue AI
      </h1>

      <p className="mt-4 text-xl">
        Your next cue, right when it matters.
      </p>

      <div className="flex gap-4 mt-8">

        <a
          href="/login"
          className="bg-blue-600 px-6 py-3 rounded-lg"
        >
          Login
        </a>

        <a
          href="/register"
          className="bg-green-600 px-6 py-3 rounded-lg"
        >
          Register
        </a>

      </div>

    </main>
  );
}