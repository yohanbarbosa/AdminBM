import { Icon } from "@iconify/react";
import AppLayout from "../layouts/AppLayout";

export default function dashboard() {
  const salesWeek = [
    { id: 1, icon: "mdi:graph-areaspline", label: "Ventas" },
    { id: 2, icon: "mdi:clipboard-check-outline", label: "Ordenes" },
    { id: 3, icon: "solar:box-outline", label: "Ventas" },
    { id: 4, icon: "mdi:graph-areaspline", label: "Ventas" },
  ];

  return (
    <>
      <AppLayout>
        <div className="flex flex-col gap-4">
          <section className="flex w-full border-gray-400 border">
            <div className="bg-gray-100 w-3/5 px-7">
              <div className="">ventas de la semana</div>
              <div className="py-5 flex justify-between">
                {salesWeek.map((item) => (
                  <div className="rounded-2xl w-28 h-28 px-2.5 py-2 bg-green-400 " key={item.id}>
                    <Icon icon={item.icon} width={30} />
                    <span className="block mt-3">30K</span>
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
