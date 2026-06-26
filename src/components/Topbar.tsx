import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Topbar() {
  const [keyBoard, setKeyBoard] = useState(false);
  return (
    <header className=" text-white flex w-full justify-between px-10 py-5 border-b-2 border-b-gray-300 bg-[#171821]">
      <div className="relative w-96">
        <input
          className="w-full border border-gray-400 rounded-2xl px-3 py-2 pr-10"
          placeholder="Search here..."
          type="text"
        />
        <Icon
          className="top-1/2 -translate-y-1/2 right-3 absolute"
          icon={"mdi:search"}
          width={20}
        />
      </div>

      <div className="">
        <div className="flex items-center space-x-2">
          <button>
            <Icon icon={"mdi:notifications-none"} width={20} />
          </button>
          <div className="ml-10 w-10 h-10 rounded-full overflow-hidden">
            <img
              src="https://wallpapercave.com/wp/wp13441462.jpg"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <button
              className="cursor-pointer"
              onClick={() => {
                setKeyBoard(!keyBoard);
              }}
            >
              <Icon
                icon={
                  keyBoard ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down"
                }
                width={25}
              />
            </button>
            {keyBoard && (
              <div className="bg-[#30313a] shadow-lg rounded-lg p-2 right-0 mt-2 w-max min-w-45 absolute flex flex-col">
                <p className="flex items-center gap-2 ml-4.5">
                  <Icon icon={"mdi:user"} width={20} /> usuario
                </p>
                <button className="group px-2 py-1 gap-2 flex items-center cursor-pointer rounded hover:bg-red-200 transition">
                  <span className="opacity-0 block w-1 h-6 bg-red-600 group-hover:opacity-100 transition"></span>
                  <Icon icon={"mdi:logout"} width={20} /> Cerrar Sesion
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
