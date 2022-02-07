import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import ListCustomer from "./pages/ListCustomer";
import NotFound from "./pages/NotFound";
import RegisterCustomer from "./pages/RegisterCustomer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/register"} element={<RegisterCustomer />} />
        <Route path={"/list"} element={<ListCustomer />} />
        <Route path={"/*"} element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
