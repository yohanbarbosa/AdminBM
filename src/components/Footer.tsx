import { Icon } from "@iconify/react";
export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-teal-500 flex items-center justify-center">
                <Icon icon="mdi:store" width={20} />
              </div>
              <span className="font-bold">
                Admin<span className="text-teal-400">BM</span>
              </span>
            </div>
            <p className="text-sm text-white/30 leading-relaxed">
              El sistema operativo para el comercio minorista independiente. Es
              creado gracias a dueños de tiendas, para dueños de tiendas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            {[
              {
                title: "Producto",
                links: ["Características","Precios","Historial de cambios","Hoja de ruta",],
              },
              {
                title: "Compañía",
                links: ["Sobre nosotros", "Blog", "Carreras", "Prensa"],
              },
              {
                title: "Soporte",
                links: ["Docs", "Centro de ayuda", "Estado", "Contacto"],
              },
            ].map((col) => (
              <div key={col.title}>
                <p className="font-semibold text-white/60 mb-3 uppercase text-xs tracking-widest">
                  {col.title}
                </p>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-white/30 hover:text-white transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 border-t border-white/5 text-xs text-white/20">
          <p>
            © Administrador de la tienda 2026. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terminos
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
