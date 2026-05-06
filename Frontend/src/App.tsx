import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import EditarPage from "./pages/EditarPage";
import FormularioPage from "./pages/FormularioPage";
import ListaPage from "./pages/ListaPage";

function App() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  const obtenerClaseNavLink = ({ isActive }: { isActive: boolean }) => {
    return `px-4 py-2 rounded transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "bg-slate-200 text-slate-800 hover:bg-slate-300"
    }`;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <header className="bg-white shadow rounded p-4">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl font-bold">Registro de Participantes</h1>

          <button
            type="button"
            onClick={() => setMenuAbierto((prev) => !prev)}
            className="md:hidden bg-slate-200 text-slate-800 px-3 py-2 rounded hover:bg-slate-300 transition"
            aria-label="Abrir menú"
          >
            ☰
          </button>

          <nav className="hidden md:flex gap-2">
            <NavLink to="/" className={obtenerClaseNavLink}>
              Listado
            </NavLink>

            <NavLink to="/nuevo" className={obtenerClaseNavLink}>
              Nuevo participante
            </NavLink>
          </nav>
        </div>

        {menuAbierto && (
          <nav className="md:hidden flex flex-col gap-2 mt-4">
            <NavLink
              to="/"
              onClick={cerrarMenu}
              className={obtenerClaseNavLink}
            >
              Listado
            </NavLink>

            <NavLink
              to="/nuevo"
              onClick={cerrarMenu}
              className={obtenerClaseNavLink}
            >
              Nuevo participante
            </NavLink>
          </nav>
        )}
      </header>

      <main>
        <Routes>
          <Route path="/" element={<ListaPage />} />
          <Route path="/nuevo" element={<FormularioPage />} />
          <Route path="/editar/:id" element={<EditarPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;