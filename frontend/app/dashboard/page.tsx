export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 bg-slate-900 min-h-screen p-6 border-r border-slate-800">
          <h1 className="text-2xl font-bold text-blue-500">
            NexCue AI
          </h1>

          <nav className="mt-10 space-y-4">
            <div className="hover:text-blue-400 cursor-pointer">
              Dashboard
            </div>

            <div className="hover:text-blue-400 cursor-pointer">
              New Meeting
            </div>

            <div className="hover:text-blue-400 cursor-pointer">
              Interview Mode
            </div>

            <div className="hover:text-blue-400 cursor-pointer">
              Notes
            </div>

            <div className="hover:text-blue-400 cursor-pointer">
              History
            </div>

            <div className="hover:text-blue-400 cursor-pointer">
              Resume Manager
            </div>

            <div className="hover:text-blue-400 cursor-pointer">
              Billing
            </div>

            <div className="hover:text-blue-400 cursor-pointer">
              Settings
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-8">

          <h2 className="text-4xl font-bold mb-8">
            Dashboard
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h3 className="text-lg font-semibold">
                Credits Remaining
              </h3>

              <p className="text-4xl mt-4 text-cyan-400">
                500
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h3 className="text-lg font-semibold">
                Current Plan
              </h3>

              <p className="text-2xl mt-4 text-green-400">
                Professional
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h3 className="text-lg font-semibold">
                Meetings This Month
              </h3>

              <p className="text-4xl mt-4 text-blue-400">
                12
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
              <h3 className="text-xl font-semibold mb-4">
                Recent Meetings
              </h3>

              <ul className="space-y-3">
                <li>Software Engineer Interview</li>
                <li>Product Manager Meeting</li>
                <li>Sprint Planning Session</li>
              </ul>
            </div>

            <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
              <h3 className="text-xl font-semibold mb-4">
                Quick Actions
              </h3>

              <div className="space-y-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg">
                  Start Interview
                </button>

                <button className="w-full bg-cyan-600 hover:bg-cyan-700 p-3 rounded-lg">
                  New Meeting
                </button>

                <button className="w-full bg-slate-700 hover:bg-slate-600 p-3 rounded-lg">
                  Upload Resume
                </button>
              </div>
            </div>

          </div>

        </section>
      </div>
    </main>
  );
}