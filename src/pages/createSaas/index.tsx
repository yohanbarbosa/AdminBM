import { useState } from "react";

type Errors = Record<string, string>;

export default function index() {
  const [passed, setPassed] = useState(1);
  const [errors, setErrors] = useState<Errors>({});
  const [formData, setFormData] = useState({
    nameCompany: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const hadleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const { nameCompany, firstName, lastName, email, password } = formData;
    const newErrors: Errors = {};

    if (passed === 1) {
      if (!nameCompany) {
        newErrors.nameCompany = "Por favor ingrese un nombre";
      }
      setErrors(newErrors);
      if (Object.keys(newErrors).length === 0) {
        setPassed((prev) => prev + 1);
      }
      return false;
    }
    if (passed === 2) {
      if (!firstName) {
        newErrors.firstName = "Por favor ingrese su nombre";
      } else if (firstName.trim().length < 2) {
        newErrors.nombres = "Los nombres deben tener al menos 2 caracteres";
      }

      if (!lastName) {
        newErrors.lastName = "Por favor ingrese su apellido";
      }else if(lastName.trim().length < 2){
        newErrors.nombres = "Los Apellidos deben tener al menos 2 caracteres";
      }

      if (!email) {
        newErrors.email = "Por favor ingrese su correo";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "El email no es válido";
      }

      if (!password) {
        newErrors.password = "La contraseña es obligatoria";
      } else if (password.length < 6) {
        newErrors.password = "La contraseña debe tener al menos 6 caracteres";
      } else if (!/(?=.*[a-z])/.test(password)) {
        newErrors.password = "Debe incluir al menos una letra minúscula";
      } else if (!/(?=.*[A-Z])/.test(password)) {
        newErrors.password = "Debe incluir al menos una letra mayúscula";
      } else if (!/(?=.*\d)/.test(password)) {
        newErrors.password = "Debe incluir al menos un número";
      }
      setErrors(newErrors);

      return Object.keys(newErrors).length === 0;
    }
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }
  };

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
          Paso {passed} de 2
        </span>
        {passed == 1 && (
          <div className="">
            <h1 className="text-2xl font-extrabold text-white tracking-tight mb-2">
              Dinos, ¿cómo se llama tu negocio?
            </h1>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              Usaremos este nombre para personalizar tu panel y tus recibos.
            </p>

            <div className="flex flex-col gap-2 mb-8">
              <label
                htmlFor="text"
                className="text-xs text-white/50 font-medium"
              >
                Nombre del negocio
              </label>
              <input
                id="text"
                placeholder="Ingresa el nombre..."
                className="w-full px-3 py-2.5 text-sm bg-white/3 text-white placeholder:text-white/25 border border-white/10 rounded-lg outline-none ring-2 ring-teal-500/0 focus:ring-teal-500/60 focus:border-teal-500/40 transition-all"
                name="nameCompany"
                type="text"
                value={formData.nameCompany}
                onChange={hadleChange}
              />
              <div className="text-red-500">
                <p>{errors.nameCompany}</p>
              </div>
            </div>
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-[#0F1B2D] font-bold px-6 py-3 rounded-xl transition-all text-sm shadow-lg shadow-teal-500/25"
            >
              Continuar
            </button>
            <p className="mt-4 text-center text-xs text-white/20">
              Podrás cambiar el nombre más adelante en la configuración
            </p>
          </div>
        )}

        {passed == 2 && (
          <div className="">
            <h1 className="text-2xl font-extrabold text-white tracking-tight mb-2">
              Ingresa unos datos más para crear tu cuenta
            </h1>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              Estos datos son esenciales para que puedas iniciar sesion mas
              adelante
            </p>

            <div className="flex flex-col gap-2 mb-8">
              <label
                htmlFor="text"
                className="text-xs text-white/50 font-medium"
              >
                Nombres
              </label>
              <input
                id="text"
                placeholder="Ingresa tus nombres..."
                className="w-full px-3 py-2.5 text-sm bg-white/3 text-white placeholder:text-white/25 border border-white/10 rounded-lg outline-none ring-2 ring-teal-500/0 focus:ring-teal-500/60 focus:border-teal-500/40 transition-all"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={hadleChange}
              />
              <div className="text-red-500">{errors.firstName}</div>
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <label
                htmlFor="text"
                className="text-xs text-white/50 font-medium"
              >
                Apellidos
              </label>
              <input
                id="text"
                placeholder="Ingresa tus apellidos..."
                className="w-full px-3 py-2.5 text-sm bg-white/3 text-white placeholder:text-white/25 border border-white/10 rounded-lg outline-none ring-2 ring-teal-500/0 focus:ring-teal-500/60 focus:border-teal-500/40 transition-all"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={hadleChange}
              />
              <div className="text-red-500">{errors.lastName}</div>
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <label
                htmlFor="text"
                className="text-xs text-white/50 font-medium"
              >
                Email
              </label>
              <input
                id="text"
                placeholder="Ingresa tu Email..."
                className="w-full px-3 py-2.5 text-sm bg-white/3 text-white placeholder:text-white/25 border border-white/10 rounded-lg outline-none ring-2 ring-teal-500/0 focus:ring-teal-500/60 focus:border-teal-500/40 transition-all"
                name="email"
                type="email"
                value={formData.email}
                onChange={hadleChange}
              />
              <div className="text-red-500">{errors.email}</div>
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <label
                htmlFor="text"
                className="text-xs text-white/50 font-medium"
              >
                Contraseña
              </label>
              <input
                id="text"
                placeholder="Ingresa una contraseña..."
                className="w-full px-3 py-2.5 text-sm bg-white/3 text-white placeholder:text-white/25 border border-white/10 rounded-lg outline-none ring-2 ring-teal-500/0 focus:ring-teal-500/60 focus:border-teal-500/40 transition-all"
                name="password"
                type="password"
                value={formData.password}
                onChange={hadleChange}
              />
              <div className="text-red-500">{errors.password}</div>
            </div>
            <div className="flex space-x-6">
              <button
                onClick={() => {
                  setPassed((prev) => prev - 1);
                }}
                className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-[#0F1B2D] font-bold px-6 py-3 rounded-xl transition-all text-sm shadow-lg shadow-teal-500/25"
              >
                Atras
              </button>
              <button
                onClick={() => {
                  handleSubmit();
                }}
                className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-[#0F1B2D] font-bold px-6 py-3 rounded-xl transition-all text-sm shadow-lg shadow-teal-500/25"
              >
                Continuar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
