import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './Pages/AuthLayout'
import Home from './Pages/Home'
import Favicon from "react-favicon";
import faviconUrl from './images/X_Logo.png'
function App() {
  return (
    <div>
      <Favicon url={faviconUrl} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
