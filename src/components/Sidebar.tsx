import { Icon } from "@iconify/react";

export default function Sidebar() {
  const navItems = [
    { id: 1, path: "/dashboard", icon: "mdi:home-variant", label: "Dashboard" },
    {
      id: 2,
      path: "/productos",
      icon: "mdi:package-variant-closed",
      label: "Productos",
    },
    { id: 3, path: "/ventas", icon: "mdi:attach-money", label: "Ventas" },
    {
      id: 4,
      path: "/clientes",
      icon: "mdi:account-group-outline",
      label: "Clientes",
    },
    {
      id: 5,
      path: "/categorias",
      icon: "mdi:file-report-outline",
      label: "Categorías",
    },
    { id: 6, path: "/compras", icon: "mdi:cart-sale", label: "Compras" },
    {
      id: 7,
      path: "/proveedores",
      icon: "mdi:account-supervisor",
      label: "Proveedor",
    },
    {
      id: 8,
      path: "/config",
      icon: "mdi:gear",
      label: "Configuracion",
    },
  ];

  return (
    <div className="pt-3.5 w-44 border-r-2 border-gray-300">
      <ul className="ml-3 space-y-5">
        {navItems.map((itme) => (
          <li
            className="group w-40 cursor-pointer flex items-center gap-2 hover:bg-blue-100 transition"
            key={itme.id}
          >
            <span className="w-2 h-8 block group-hover:bg-blue-700 transition "></span>
            <Icon icon={itme.icon} width={20} />
            <p>{itme.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
