import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";

import Orders from "./features/Order/Orderlist";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Orders />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
