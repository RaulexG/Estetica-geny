import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext"; // Asegúrate de usar la ruta correcta
import { loginUser } from "../../services/loginService"; // Servicio para manejar el login
import logo from "../webpage/assets/Logo.svg"; // Ruta del logo

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // Accede al contexto del usuario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Para manejar errores

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const loginData = { email, password };
      const response = await loginUser(loginData); // Llamada al servicio de login
      const user = response.data;

      // Actualiza el contexto con el usuario logueado
      setUser(user);

      // Redirige según el rol del usuario
      if (user.role === "CLIENT") {
        navigate("/client");
      } else if (user.role === "EMPLOYEE") {
        navigate("/worker");
      } else if (user.role === "ADMIN") {
        navigate("/admin");
      } else {
        setErrorMessage("Rol desconocido. Contacta al administrador.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error.response?.data || error.message);
      setErrorMessage("Credenciales inválidas o error en el servidor.");
    }
  };

  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-20" />
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Correo Electrónico
            </label>
            <div className="flex items-center border border-gray-300 rounded">
              <span className="px-3 text-gray-500">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                id="email"
                type="email"
                placeholder="Correo Electrónico"
                className="w-full p-2 rounded-r focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Contraseña
            </label>
            <div className="flex items-center border border-gray-300 rounded">
              <span className="px-3 text-gray-500">
                <i className="fas fa-lock"></i>
              </span>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                className="w-full p-2 rounded-r focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="px-3 text-gray-500 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <i className="fas fa-eye-slash"></i>
                ) : (
                  <i className="fas fa-eye"></i>
                )}
              </button>
            </div>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}
          <div className="flex items-center justify-between mb-4">
            <div>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-pink-500" />
                <span className="ml-2 text-gray-600">Recordar usuario</span>
              </label>
            </div>
            <div>
              <a href="/forgot-password" className="text-pink-500 hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition duration-200"
          >
            Iniciar sesión
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            ¿No tienes una cuenta?{" "}
            <a href="/register" className="text-pink-500 hover:underline">
              Regístrate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
