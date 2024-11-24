import React, { useState, useEffect } from "react";
import {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../../../services/employeeService";
import {
  getAllClients,
  addClient,
  updateClient,
  deleteClient,
} from "../../../services/clientsService";

function Cuentas() {
  const [accountType, setAccountType] = useState("trabajador");
  const [accounts, setAccounts] = useState([]);
  const [filteredAccounts, setFilteredAccounts] = useState([]);
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    status: "ACTIVE",
  });
  const [selectedAccount, setSelectedAccount] = useState(null);

  useEffect(() => {
    setAccounts([]);
    setFilteredAccounts([]);
    setShowAll(false);
  }, [accountType]);

  const fetchAccounts = async () => {
    try {
      if (!showAll) {
        let response;
        if (accountType === "trabajador") {
          response = await getAllEmployees();
        } else if (accountType === "cliente") {
          response = await getAllClients();
        }
        setAccounts(response.data || []);
        setFilteredAccounts([]);
      } else {
        setAccounts([]);
      }
      setShowAll(!showAll);
    } catch (error) {
      console.error("Error al cargar cuentas:", error);
    }
  };
  const handleSearch = () => {
    if (search.trim() === "") {
      // Si no hay texto en el buscador, limpiar los resultados filtrados
      setFilteredAccounts([]);
      return;
    }
  
    const lowerCaseSearch = search.toLowerCase();
  
    const filtered = accounts.filter((account) =>
      account.user.name.toLowerCase().includes(lowerCaseSearch)
    );
  
    setFilteredAccounts(filtered); // Mostrar solo las cuentas filtradas
  };
  

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSaveAccount = async () => {
    try {
      if (selectedAccount) {
        if (accountType === "trabajador") {
          await updateEmployee(selectedAccount.idEmployee, {
            address: form.address,
            status: form.status,
            user: {
              name: form.name,
              phone: form.phone,
              email: form.email,
              enabled: true,
            },
          });
        } else if (accountType === "cliente") {
          await updateClient(selectedAccount.idClient, {
            user: {
              name: form.name,
              phone: form.phone,
              email: form.email,
              enabled: true,
            },
          });
        }
      } else {
        if (accountType === "trabajador") {
          await addEmployee({
            address: form.address,
            status: form.status,
            user: {
              name: form.name,
              phone: form.phone,
              email: form.email,
              password: form.password,
              enabled: true,
            },
          });
        } else if (accountType === "cliente") {
          await addClient({
            user: {
              name: form.name,
              phone: form.phone,
              email: form.email,
              password: form.password,
              enabled: true,
            },
          });
        }
      }
      setForm({
        name: "",
        phone: "",
        email: "",
        password: "",
        address: "",
        status: "ACTIVE",
      });
      setFormVisible(false);
      setSelectedAccount(null);
      fetchAccounts();
    } catch (error) {
      console.error("Error al guardar la cuenta:", error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-pink-500">Gestión de Cuentas</h2>

      <div className="mb-6 flex items-center">
        <label className="block font-medium mb-2 mr-4">Tipo de cuenta:</label>
        <select
          className="p-3 border rounded bg-gray-300"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
        >
          <option value="trabajador">Trabajadores</option>
          <option value="cliente">Clientes</option>
        </select>
        <button
          className="ml-4 bg-pink-500 text-white p-2 rounded-full hover:bg-pink-400"
          onClick={() => {
            setFormVisible(true);
            setSelectedAccount(null);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24">
            <path
              fill="white"
              d="M14 14.252V22H4a8 8 0 0 1 10-7.748M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m6 4v-3h2v3h3v2h-3v3h-2v-3h-3v-2z"
            />
          </svg>
        </button>
      </div>

      <div className="flex mb-6 items-center">
        <input
          type="text"
          placeholder="Buscar por nombre"
          className="flex-grow p-3 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="ml-2 p-3 bg-blue-500 text-white rounded hover:bg-blue-400"
          onClick={handleSearch}
        >
          🔍
        </button>
        <button
          className="ml-2 p-3 bg-gray-500 text-white rounded hover:bg-gray-400"
          onClick={fetchAccounts}
        >
          {showAll ? "Ocultar Todos" : "Mostrar Todos"}
        </button>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg max-h-80 overflow-y-auto">
  {(filteredAccounts.length > 0 ? filteredAccounts : showAll ? accounts : []).map((account) => (
    <div key={account.user.idUser} className="flex justify-between items-center mb-4">
      <span>
        {account.user.name} - {account.user.email}
      </span>
      <div className="flex space-x-2">
        <button
          className="focus:outline-none"
          onClick={() => {
            setFormVisible(true);
            setSelectedAccount(account);
            setForm({
              name: account.user.name,
              phone: account.user.phone,
              email: account.user.email,
              password: "",
              address: accountType === "trabajador" ? account.address : "",
              status: accountType === "trabajador" ? account.status : "ACTIVE",
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-blue-500 hover:text-blue-700 transition"
          >
            <path d="M8.707 19.707L18 10.414L13.586 6l-9.293 9.293a1 1 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263M21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586L19.414 9z" />
          </svg>
        </button>
        <button
          className="focus:outline-none"
          onClick={() => {
            if (window.confirm("¿Estás seguro de que deseas eliminar esta cuenta?")) {
              const deleteFn =
                accountType === "trabajador" ? deleteEmployee : deleteClient;
              const id =
                accountType === "trabajador" ? account.idEmployee : account.idClient;
              deleteFn(id)
                .then(() => {
                  setAccounts(accounts.filter((a) => a !== account));
                  setFilteredAccounts(filteredAccounts.filter((a) => a !== account));
                })
                .catch((error) => {
                  console.error("Error al eliminar la cuenta:", error);
                });
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-red-500 hover:text-red-700 transition"
          >
            <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z" />
          </svg>
        </button>
      </div>
    </div>
  ))}
</div>


      {formVisible && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-4 text-gray-700">
            {selectedAccount ? "Editar Cuenta" : "Crear Nueva Cuenta"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleInputChange}
              className="p-3 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo"
              value={form.email}
              onChange={handleInputChange}
              className="p-3 border rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Teléfono"
              value={form.phone}
              onChange={handleInputChange}
              className="p-3 border rounded"
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={form.password}
              onChange={handleInputChange}
              className="p-3 border rounded"
            />
            {accountType === "trabajador" && (
              <>
                <input
                  type="text"
                  name="address"
                  placeholder="Dirección"
                  value={form.address}
                  onChange={handleInputChange}
                  className="p-3 border rounded"
                />
                <select
                  name="status"
                  value={form.status}
                  onChange={handleInputChange}
                  className="p-3 border rounded"
                >
                  <option value="ACTIVE">Activo</option>
                  <option value="VACATION">Vacaciones</option>
                  <option value="INABILITY">Incapacidad</option>
                </select>
              </>
            )}
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="bg-gray-500 text-white px-6 py-2 rounded-lg mr-2 hover:bg-gray-400"
              onClick={() => setFormVisible(false)}
            >
              Cancelar
            </button>
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-400"
              onClick={handleSaveAccount}
            >
              Guardar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cuentas;
