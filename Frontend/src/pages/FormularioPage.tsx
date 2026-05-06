import { useNavigate } from "react-router-dom";

import Formulario from "../components/Formulario";

function FormularioPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Nuevo participante</h2>

      <Formulario onSuccess={() => navigate("/")} />
    </div>
  );
}

export default FormularioPage;