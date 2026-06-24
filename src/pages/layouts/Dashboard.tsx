import { Icon } from "@iconify/react";

export default function dashboard() {
  return (
    <>
      <div className="">
        <header className="flex " >
          <div className="">
            <input placeholder="Search..." type="text" />
          </div>
          <div className="">
            <button>
              <Icon icon={"mdi:notifications-none"} width={20} />
            </button>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://wallpapercave.com/wp/wp13441462.jpg"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <p>User</p>
          </div>
        </header>
      </div>
    </>
  );
}
