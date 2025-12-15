import { Routes, Route , Navigate } from "react-router";
import UploadCV from "./pages/UploadCV";
import PersonaList from "./pages/PersonaList";
import PersonaDetail from "./pages/PersonaDetail";

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Navigate to="/upload" />} />
      <Route path="/upload" element={<UploadCV />} />
      <Route path="/personas" element={<PersonaList />} />
      <Route path="/personas/:id" element={<PersonaDetail />} />
    </Routes>
   </>
  );
}

export default App;
