const metrics = [
  {
    label: "Monthly recurring revenue",
    value: "$128.4K",
    change: "+12.8%",
    tone: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    label: "Active subscribers",
    value: "8,492",
    change: "+843",
    tone: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    label: "Churn risk",
    value: "2.1%",
    change: "-0.7%",
    tone: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    label: "Expansion revenue",
    value: "$42.8K",
    change: "+18.2%",
    tone: "text-violet-600",
    bg: "bg-violet-50",
  },
];

const revenue = [42, 56, 48, 72, 68, 86, 95, 83, 108, 116, 104, 128];
const acquisition = [
  { source: "Organic", value: 38, color: "bg-slate-950" },
  { source: "Product-led", value: 27, color: "bg-blue-500" },
  { source: "Partners", value: 21, color: "bg-violet-500" },
  { source: "Paid", value: 14, color: "bg-amber-400" },
];

const customers = [
  { name: "Northstar Labs", plan: "Enterprise", health: "96%", mrr: "$18,400" },
  { name: "Acme AI", plan: "Scale", health: "88%", mrr: "$11,250" },
  { name: "Orbit Finance", plan: "Business", health: "81%", mrr: "$7,920" },
  { name: "Pixel Foundry", plan: "Pro", health: "74%", mrr: "$4,680" },
];

const nav = ["Overview", "Customers", "Analytics", "Billing", "Integrations"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] text-slate-950">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white/80 p-6 backdrop-blur lg:block">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-lg font-black text-white">
              S
            </div>
            <div>
              <p className="font-bold tracking-tight">StackPilot</p>
              <p className="text-sm text-slate-500">SaaS Command Center</p>
            </div>
          </div>

          <nav className="mt-10 space-y-2">
            {nav.map((item) => (
              <a
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  item === "Overview"
                    ? "bg-slate-950 text-white shadow-lg shadow-slate-950/15"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                }`}
                href="#"
                key={item}
              >
                {item}
                {item === "Customers" && (
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                    24
                  </span>
                )}
              </a>
            ))}
          </nav>

          <div className="mt-10 rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 p-5 text-white shadow-xl shadow-blue-500/20">
            <p className="text-sm font-medium text-white/75">Upgrade forecast</p>
            <p className="mt-3 text-3xl font-black tracking-tight">$31.2K</p>
            <p className="mt-2 text-sm leading-6 text-white/80">
              Predicted expansion opportunity across 18 accounts this quarter.
            </p>
            <button className="mt-5 w-full rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-950">
              View pipeline
            </button>
          </div>
        </aside>

        <section className="flex-1 p-4 sm:p-6 lg:p-8">
          <header className="flex flex-col gap-5 rounded-[2rem] border border-white bg-white/75 p-5 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                Dashboard
              </p>
              <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Grow smarter, not louder.
              </h1>
              <p className="mt-2 max-w-2xl text-slate-500">
                Track revenue, customer health, acquisition, and product usage in one focused SaaS workspace.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm">
                Export
              </button>
              <button className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/15">
                New report
              </button>
            </div>
          </header>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <article
                className="rounded-[2rem] border border-white bg-white p-6 shadow-sm"
                key={metric.label}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-medium text-slate-500">{metric.label}</p>
                  <span className={`rounded-full ${metric.bg} px-3 py-1 text-xs font-bold ${metric.tone}`}>
                    {metric.change}
                  </span>
                </div>
                <p className="mt-5 text-3xl font-black tracking-tight">{metric.value}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
            <article className="rounded-[2rem] border border-white bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-black tracking-tight">Revenue momentum</h2>
                  <p className="text-sm text-slate-500">MRR growth over the last 12 months</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-600">
                  On track
                </span>
              </div>

              <div className="mt-8 flex h-72 items-end gap-3 rounded-3xl bg-slate-50 p-5">
                {revenue.map((amount, index) => (
                  <div className="flex flex-1 flex-col items-center gap-3" key={`${amount}-${index}`}>
                    <div
                      className="w-full rounded-t-2xl bg-gradient-to-t from-blue-500 to-cyan-300 shadow-lg shadow-blue-500/10"
                      style={{ height: `${amount * 1.65}px` }}
                      title={`$${amount}K`}
                    />
                    <span className="text-xs font-semibold text-slate-400">
                      {new Date(2026, index, 1).toLocaleString("en", { month: "short" })}
                    </span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-white bg-slate-950 p-6 text-white shadow-sm">
              <h2 className="text-xl font-black tracking-tight">Acquisition mix</h2>
              <p className="mt-1 text-sm text-slate-400">New qualified pipeline by channel</p>
              <div className="mt-8 space-y-6">
                {acquisition.map((item) => (
                  <div key={item.source}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-semibold">{item.source}</span>
                      <span className="text-slate-300">{item.value}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/10">
                      <div
                        className={`h-3 rounded-full ${item.color}`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-3xl bg-white/10 p-5">
                <p className="text-sm font-semibold text-slate-300">Best converting segment</p>
                <p className="mt-2 text-2xl font-black">Mid-market AI teams</p>
              </div>
            </article>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.9fr]">
            <article className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-sm">
              <div className="flex items-center justify-between p-6">
                <div>
                  <h2 className="text-xl font-black tracking-tight">Top accounts</h2>
                  <p className="text-sm text-slate-500">Highest-value customers by MRR</p>
                </div>
                <button className="text-sm font-bold text-blue-600">View all</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-400">
                    <tr>
                      <th className="px-6 py-4">Customer</th>
                      <th className="px-6 py-4">Plan</th>
                      <th className="px-6 py-4">Health</th>
                      <th className="px-6 py-4 text-right">MRR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {customers.map((customer) => (
                      <tr className="hover:bg-slate-50" key={customer.name}>
                        <td className="px-6 py-5 font-bold">{customer.name}</td>
                        <td className="px-6 py-5 text-slate-500">{customer.plan}</td>
                        <td className="px-6 py-5">
                          <span className="rounded-full bg-emerald-50 px-3 py-1 font-bold text-emerald-600">
                            {customer.health}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-right font-black">{customer.mrr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article className="rounded-[2rem] border border-white bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black tracking-tight">Today&apos;s priorities</h2>
              <div className="mt-5 space-y-4">
                {[
                  ["Review enterprise renewal risk", "3 accounts need attention"],
                  ["Ship onboarding experiment", "Variant B is outperforming by 9%"],
                  ["Follow up on annual upgrades", "$24K open pipeline"],
                ].map(([title, description], index) => (
                  <div className="flex gap-4 rounded-3xl bg-slate-50 p-4" key={title}>
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white font-black text-blue-600 shadow-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-bold">{title}</p>
                      <p className="mt-1 text-sm text-slate-500">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
