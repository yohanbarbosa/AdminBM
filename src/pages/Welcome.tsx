import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Footer from "../components/Footer.tsx"
import { useNavigate } from "react-router-dom";


// ── animated dashboard widget ─────────────────────────────────────────────────
function DashboardPreview() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick(p => p + 1), 2000);
    return () => clearInterval(t);
  }, []);

  const bars = [65, 80, 45, 90, 72, 88, 55];
  const liveBar = bars.map((b, i) => Math.min(100, b + (tick % 3 === i % 3 ? 8 : 0)));

  return (
    <div className="relative w-full max-w-2xl mx-auto select-none">
      {/* window chrome */}
      <div className="rounded-2xl overflow-hidden shadow-2xl shadow-teal-500/10 border border-white/10 bg-[#111C2E]">
        {/* title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0D1624] border-b border-white/5">
          <span className="w-3 h-3 rounded-full bg-red-400/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <span className="w-3 h-3 rounded-full bg-green-400/70" />
          <span className="ml-4 text-xs text-white/30 font-mono">StoreAdmin — Dashboard</span>
          <div className="ml-auto flex items-center gap-3 text-white/30">
            <Icon icon="mdi:bell" width={14} />
            <div className="w-6 h-6 rounded-full bg-teal-500/50 text-[10px] text-teal-200 flex items-center justify-center font-bold">A</div>
          </div>
        </div>

        <div className="p-5 space-y-4">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Today's Sales", value: "$4,821", delta: "+12%", color: "text-teal-400" },
              { label: "Orders", value: "138", delta: "+5%", color: "text-teal-400" },
              { label: "Low Stock", value: "7 items", delta: "⚠ alert", color: "text-amber-400" },
            ].map(k => (
              <div key={k.label} className="rounded-xl bg-white/5 border border-white/5 p-3">
                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">{k.label}</p>
                <p className="text-lg font-bold text-white leading-none">{k.value}</p>
                <p className={`text-[11px] mt-1 font-medium ${k.color}`}>{k.delta}</p>
              </div>
            ))}
          </div>

          {/* bar chart */}
          <div className="rounded-xl bg-white/5 border border-white/5 p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-white/60 font-medium">Weekly Revenue</p>
              <p className="text-[10px] text-teal-400 font-mono">Jun 5 – Jun 11</p>
            </div>
            <div className="flex items-end gap-1.5 h-16">
              {liveBar.map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-sm transition-all duration-700 ease-in-out"
                    style={{
                      height: `${h}%`,
                      background: i === 6
                        ? "linear-gradient(to top, #00C9A7, #00e5c4)"
                        : "rgba(255,255,255,0.12)",
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-1.5">
              {["M","T","W","T","F","S","S"].map((d,i) => (
                <span key={i} className="flex-1 text-center text-[9px] text-white/25">{d}</span>
              ))}
            </div>
          </div>

          {/* recent orders table */}
          <div className="rounded-xl bg-white/5 border border-white/5 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
              <p className="text-xs text-white/60 font-medium">Recent Orders</p>
              <span className="text-[10px] text-teal-400 cursor-pointer">View all →</span>
            </div>
            {[
              { id: "#3041", customer: "María G.", product: "Laptop Stand", amount: "$49", status: "Paid" },
              { id: "#3040", customer: "Carlos R.", product: "Wireless Mouse", amount: "$32", status: "Pending" },
              { id: "#3039", customer: "Ana L.", product: "USB Hub × 2", amount: "$58", status: "Paid" },
            ].map(o => (
              <div key={o.id} className="flex items-center gap-3 px-4 py-2 border-b border-white/4 last:border-0">
                <span className="text-[10px] font-mono text-white/30 w-10">{o.id}</span>
                <span className="text-[11px] text-white/70 flex-1">{o.customer}</span>
                <span className="text-[11px] text-white/40 flex-1 hidden sm:block">{o.product}</span>
                <span className="text-[11px] font-semibold text-white">{o.amount}</span>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${o.status === "Paid" ? "bg-teal-500/20 text-teal-400" : "bg-amber-500/20 text-amber-400"}`}>{o.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ambient glow */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-20 rounded-full"
           style={{ background: "radial-gradient(ellipse at 50% 60%, #00C9A7 0%, transparent 70%)" }} />
    </div>
  );
}

// ── main page ─────────────────────────────────────────────────────────────────
export default function Welcome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const features = [
    {
      icon: "mdi:graph-line",
      title: "Real-Time Analytics",
      desc: "Sigue las ventas, los principales productos y las tendencias de ingresos de un vistazo. Toma decisiones respaldadas por datos en vivo, no por la hoja de cálculo de ayer.",
      color: "text-teal-400",
      bg: "bg-teal-500/10",
    },
    {
      icon: "mdi:clipboard-list-outline",
      title: "Inventory Control",
      desc: "Recibe alertas automáticas de poco stock, gestiona proveedores y sincroniza tu stock físico y online en un solo lugar.",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      icon: "mdi:people-group",
      title: "Staff & Roles",
      desc: "Asigna roles, establece permisos y lleva un control de quién hace qué en tu tienda — en una ubicación o en varias.",
      color: "text-violet-400",
      bg: "bg-violet-500/10",
    },
    {
      icon: "mdi:label-percent-outline",
      title: "Product Catalog",
      desc: "Organiza los productos con variantes, categorías, códigos de barras y reglas de precios personalizadas diseñadas para retail, no para empresas.",
      color: "text-rose-400",
      bg: "bg-rose-500/10",
    },
    {
      icon: "mdi:dollar",
      title: "Sales & Invoicing",
      desc: "Procesa ventas, emite recibos, aplica descuentos y exporta informes en segundos — desde cualquier dispositivo.",
      color: "text-teal-400",
      bg: "bg-teal-500/10",
    },
    {
      icon: "mdi:database",
      title: "Data You Own",
      desc: "Los datos de tu tienda son tuyos. Cifrado en reposo, exportable en cualquier momento, sin bloqueo por parte del proveedor.",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
  ];


  return (
    <div className="min-h-screen bg-[#0F1B2D] text-white font-['Inter',sans-serif] overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#0F1B2D]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
              <Icon icon="mdi:store" width={28}/>
            </div>
            <span className="font-bold text-lg tracking-tight">Admin<span className="text-teal-400">BM</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            {["Funcionalidades", "Precios", "Documentacion", "Sobre Nosostros"].map(l => (
              <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors px-4 py-2">Iniciar sesion</a>
            <button onClick={()=>{navigate("/createSaas")}} className="text-sm font-semibold bg-teal-500 hover:bg-teal-400 text-[#0F1B2D] px-5 py-2 rounded-lg transition-colors">
              Empezar gratis
            </button>
          </div>

          <button className="md:hidden text-white/60" onClick={() => setMenuOpen(o => !o)}>
            <Icon icon={menuOpen? "mdi:cancel-bold" : "mdi:menu"} width={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#111C2E] border-t border-white/5 px-6 py-4 space-y-3">
            {["Funcionalidades", "Precios", "Documentacion", "Sobre Nosostros"].map(l => (
              <a key={l} href="#" className="block text-sm text-white/60 py-1">{l}</a>
            ))}
            <a href="#" className="block text-sm font-semibold bg-teal-500 text-[#0F1B2D] px-5 py-2.5 rounded-lg text-center mt-2">
            Empezar gratis
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pt-32 pb-24 px-6 relative  overflow-hidden">

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-6 uppercase tracking-widest">
              <Icon icon="mdi:thunder" width={18} />
              Construido para tiendas pequeñas y medianas
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 max-w-3xl">
              Lleva tu tienda en tu telefono.<br />
              <span className="text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(135deg, #00C9A7 0%, #00E5C4 50%, #F59E0B 100%)" }}>
                No en tus hojas.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed mb-10">
            AdminBM ofrece a los minoristas independientes la misma capacidad operativa
            que las grandes cadenas, sin el precio de las grandes empresas ni la configuración que dura una semana.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button   className="cursor-pointer flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-[#0F1B2D] font-bold px-8 py-4 rounded-xl transition-all text-sm shadow-lg shadow-teal-500/25">
                Empieza gratis
                <Icon icon="mdi:arrow-right-thin" width={20} />
              </button>
              <button className="cursor-pointer flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl transition-all text-sm">
                Mira como funciona !
              </button>
            </div>

            <p className="mt-4 text-xs text-white/25">No credit card required · 14-day free trial · Cancel anytime</p>
          </div>

          {/* dashboard preview */}
          <DashboardPreview />
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
      <div className="border-y border-white/5 bg-white/2 py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-8 text-white/25 text-xs font-medium uppercase tracking-widest">
          {["Configuración media: 15 minutos", "∙", "SLA de tiempo de actividad del 99,9%", "∙", "Cumple con el GDPR"].map((t, i) => (
            <span key={i} className={t === "∙" ? "hidden md:block" : "text-white/30"}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section className="py-24 px-6" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs text-teal-400 font-semibold uppercase tracking-[0.2em] mb-3">Todo lo que necesitas</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Un sistema para la tienda
            </h2>
            <p className="mt-4 text-white/40 max-w-lg mx-auto">
              Deja de usar varias herramientas diferentes.
              AdminBM te permite gestionar inventario, ventas, personal y análisis en un solo lugar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(f => (
              <div key={f.title}
                   className="group rounded-2xl border border-white/5 bg-white/2 hover:bg-white/5 p-6 transition-all duration-300 hover:border-white/10">
                <div className={`w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                 <Icon icon={f.icon} width={25}/>
                </div>
                <h3 className="font-bold text-base mb-2">{f.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-6 bg-white/1.5 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs text-teal-400 font-semibold uppercase tracking-[0.2em] mb-3">Simple de diseñar</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">En marcha en minutos</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Create your account", desc: "Sign up, name your store, and choose your currency. That's it. No forms, no IT department needed." },
              { step: "02", title: "Import your products", desc: "Paste in a spreadsheet or scan barcodes. StoreAdmin maps your catalog automatically." },
              { step: "03", title: "Start selling", desc: "Your dashboard is live. Start processing orders, tracking stock, and watching your revenue in real time." },
            ].map(s => (
              <div key={s.step} className="flex gap-5">
                <div className="shrink-0">
                  <span className="text-5xl font-black text-transparent"
                        style={{ WebkitTextStroke: "1px rgba(0,201,167,0.3)" }}>
                    {s.step}
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      {/* <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs text-teal-400 font-semibold uppercase tracking-[0.2em] mb-3">From store owners</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Real stores, real results</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <p className="text-sm text-white/60 leading-relaxed mb-5 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-teal-500/20 text-teal-400 text-xs font-bold flex items-center justify-center">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-white/30">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── PRICING ── */}
      {/* <section className="py-24 px-6 border-t border-white/5" id="pricing">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs text-teal-400 font-semibold uppercase tracking-[0.2em] mb-3">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Simple, transparent pricing</h2>
            <p className="mt-4 text-white/40">All plans include a 14-day free trial. No credit card required.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map(p => (
              <div key={p.name}
                   className={`rounded-2xl p-6 border ${p.highlight
                     ? "bg-teal-500/10 border-teal-500/40 relative"
                     : "bg-white/[0.02] border-white/5"}`}>
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-[#0F1B2D] text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                    Most popular
                  </div>
                )}
                <p className="font-bold text-lg mb-1">{p.name}</p>
                <div className="flex items-baseline gap-0.5 mb-2">
                  <span className="text-4xl font-extrabold">{p.price}</span>
                  <span className="text-white/40 text-sm">{p.period}</span>
                </div>
                <p className="text-sm text-white/40 mb-6">{p.desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                      <Icon2 d={icons.check} size={14} stroke="#00C9A7" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#"
                   className={`block text-center text-sm font-bold py-3 rounded-xl transition-all ${p.highlight
                     ? "bg-teal-500 hover:bg-teal-400 text-[#0F1B2D] shadow-lg shadow-teal-500/20"
                     : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"}`}>
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── CTA BANNER ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="absolute inset-0 -z-10 blur-3xl opacity-15 rounded-full"
               style={{ background: "radial-gradient(ellipse, #00C9A7 0%, transparent 70%)" }} />
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Tu tienda merece mejores herramientas.
          </h2>
          <p className="text-white/40 mb-8 text-lg">
           Únete a los minoristas independientes que cambiaron a AdminBM y nunca miraron atrás.
          </p>
          <a href="#"
             className=" cursor-pointer inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-[#0F1B2D] font-bold px-10 py-4 rounded-xl transition-all text-base shadow-xl shadow-teal-500/30">
            Empieza — Es gratis
            <Icon icon="mdi:arrow-right-thin" width={18} stroke="#0F1B2D" />
          </a>
          <p className="mt-4 text-xs text-white/20">Sin tarjeta de crédito · Prueba de 10 días · Cancela en cualquier momento</p>
        </div>
      </section>

        <Footer/>
    </div>
  );
}