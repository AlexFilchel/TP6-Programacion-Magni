import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Formulario from "../components/Formulario";
import { useParticipantes } from "../context/ParticipantesContext";

function EditarPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    cargandoParticipantes,
    buscarParticipantePorId,
    cargarEdicion,
    limpiarEdicion,
  } = useParticipantes();

  const idNumerico = Number(id);

  const participante = buscarParticipantePorId(idNumerico);

  useEffect(() => {
    if (participante) {
      cargarEdicion(participante);
    }

    return () => {
      limpiarEdicion();
    };
  }, [participante, cargarEdicion, limpiarEdicion]);

  if (cargandoParticipantes) {
    return (
      <div className="bg-white shadow rounded p-6">
        <p className="text-slate-600">Cargando participante...</p>
      </div>
    );
  }

  if (!id || Number.isNaN(idNumerico)) {
    return (
      <div className="bg-white shadow rounded p-6 space-y-4">
        <h2 className="text-2xl font-bold">ID inválido</h2>
        <p className="text-slate-600">
          El identificador recibido en la URL no es válido.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Volver al listado
        </Link>
      </div>
    );
  }

  if (!participante) {
    return (
      <div className="bg-white shadow rounded p-6 space-y-4">
        <h2 className="text-2xl font-bold">Participante no encontrado</h2>
        <p className="text-slate-600">
          No existe un participante con el ID {idNumerico}.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Volver al listado
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Editar participante</h2>

      <Formulario
        onSuccess={() => navigate("/")}
        onCancelar={() => navigate("/")}
      />
    </div>
  );
}

export default EditarPage;