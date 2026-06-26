import { Icon } from "@iconify/react";
import AppLayout from "../layouts/AppLayout";

export default function dashboard() {
  const salesWeek = [
    { id: 1, icon: "at-icons:bar-graph", label: "Ventas", quantity: "5.000.000", color: "orange" },
    { id: 2, icon: "mdi:clipboard-check-outline", label: "Ordenes", quantity: "500", color: "green" },
    { id: 3, icon: "solar:box-outline", label: "Productos Vendidos", quantity: "760", color: "blue" },
    { id: 4, icon: "mingcute:user-add-line", label: "Nuevos Clientes", quantity: "8", color: "pink" },
  ];

  return (
    <>
      <AppLayout>
        <div className="flex flex-col gap-4">
          <section className="flex w-full border-gray-400 border">
            <div className="bg-[#171821] w-3/5 px-7">
              <div className="">ventas de la semana</div>
              <div className="py-5 flex justify-between">
                {salesWeek.map((item) => (
                  <div
                    className="rounded-2xl w-32 h-32 px-2.5 py-2 bg-[#30313a] "
                    key={item.id}
                  >
                    <Icon color={item.color} icon={item.icon} width={30} />
                    <span className="block mt-3">{item.quantity}</span>
                    <label htmlFor="">{item.label}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-cyan-100 w-2/5">
              <div className="">Nivel</div>
              <div className="">Grafica</div>
            </div>
          </section>
          <section className="w-full border-gray-400 border">2</section>
          <section className="w-full border-gray-400 border">3</section>
        </div>
      </AppLayout>
    </>
  );
}
