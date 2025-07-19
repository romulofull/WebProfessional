import { useState } from "react";
import es from "./language/español";
import en from "./language/ingles";
import de from "./language/aleman";

import Encabezado from "./components/Encabezado";
import SobreMi from "./components/SobreMi";
import Servicios from "./components/Servicios";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
const languages = { es, en, de };

function App() {
  const [language, setLanguage] = useState("es");
  const t = languages[language];

  return (
    <>
   <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 999 }}>
  <select onChange={(e) => setLanguage(e.target.value)} value={language}>
    <option value="es">🇪🇸 Español</option>
    <option value="en">🇬🇧 English</option>
    <option value="de">🇩🇪 Deutsch</option>
  </select>
</div>

      <Encabezado t={t} />
      <SobreMi t={t} />
      <Servicios t={t} />
      <Proyectos t={t} />
     <Contacto t={t} />
    </>
  );
}

export default App;
