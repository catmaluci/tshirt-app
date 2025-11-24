import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../pages/App";
import CustomizeForm from "../pages/CustomizeForm";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
         <Route path="/CustomizeForm" element={<CustomizeForm />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
