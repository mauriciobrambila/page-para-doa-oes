import TelaDoacao from "./telas/TelaDoacao";
import TelaInscricao from "./telas/TelaInscricao";
import TelaMenu from "./telas/TelaMenu";
import TelaConstrucao from "./telas/TelaConstrucao";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/doacao" element={<TelaDoacao />} />
          <Route path="/fichario" element={<TelaInscricao />} />
          <Route path="/" element={<TelaMenu />} />
          <Route path="/construcao" element={<TelaConstrucao />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
