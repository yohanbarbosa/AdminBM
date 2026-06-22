export default function index() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#0F1B2D] relative overflow-hidden font-['Inter',sans-serif]">
      {/* grid bg, same as hero */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#00C9A7 1px, transparent 1px), linear-gradient(90deg, #00C9A7 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 blur-[120px] opacity-10 bg-teal-400 pointer-events-none" />

      {/* card */}
      <div className="relative z-10 w-full max-w-md mx-6 rounded-2xl border border-white/5 bg-white/2 p-8 shadow-2xl shadow-teal-500/5">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full px-3 py-1 mb-6 uppercase tracking-widest">
          Paso 1 de 3
        </span>

        <h1 className="text-2xl font-extrabold text-white tracking-tight mb-2">
          Dinos, ¿cómo se llama tu negocio?
        </h1>
        <p className="text-sm text-white/40 leading-relaxed mb-6">
          Usaremos este nombre para personalizar tu panel y tus recibos.
        </p>

        <div className="flex flex-col gap-2 mb-8">
          <label htmlFor="text" className="text-xs text-white/50 font-medium">
            Nombre del negocio
          </label>
          <input
            id="text"
            placeholder="Ingresa el nombre..."
            className="w-full px-3 py-2.5 text-sm bg-white/3 text-white placeholder:text-white/25 border border-white/10 rounded-lg outline-none ring-2 ring-teal-500/0 focus:ring-teal-500/60 focus:border-teal-500/40 transition-all"
            name="text"
            type="text"
          />
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-[#0F1B2D] font-bold px-6 py-3 rounded-xl transition-all text-sm shadow-lg shadow-teal-500/25">
          Continuar
        </button>

        <p className="mt-4 text-center text-xs text-white/20">
          Podrás cambiar el nombre más adelante en la configuración
        </p>
      </div>
    </div>
  );
}