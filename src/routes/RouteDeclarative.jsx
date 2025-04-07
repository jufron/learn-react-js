import { BrowserRouter, Route, Routes } from "react-router";
import Index from "../pages/Index";
import useAnalytics from "../hooks/useAnalytics";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/Dashboard.layout";
import IndexDashboard from '../pages/dashboard/Dashboard';
import DashboardProduct from "../pages/dashboard/product/Product.jsx";
import DashboardProductShow from "../pages/dashboard/product/ProductShow.jsx";
import NotFound from "../pages/errors/NotFound.jsx";
import useScrollRestoration from "../hooks/useScrollRestoration.js";


export default function RouterDeclarative () {
  return (
    <BrowserRouter>
      <RouteApp />
    </BrowserRouter>
  );
}

function RouteApp () {
  // useAnalytics();
  useScrollRestoration();

  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<IndexDashboard />} />

        <Route path="product">
          <Route index element={<DashboardProduct />} />
          <Route path=":id" element={<DashboardProductShow />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}