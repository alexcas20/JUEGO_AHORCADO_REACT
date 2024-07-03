import { Route, Routes } from "react-router-dom";
import { Portada } from "./components/Portada";
import { Juego } from "./components/Juego";
import { Final } from "./components/Final";
import { Ganador } from "./components/Ganador";
import { Provider } from "./contexto/Provider";

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Portada />}></Route>
        <Route path="/juego" element={<Juego />}></Route>
        <Route path="/final" element={<Final />}></Route>
        <Route path="/ganado" element={<Ganador />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
