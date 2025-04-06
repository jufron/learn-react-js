import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/Index";
import DashboardLayout from "./layouts/Dashboard.layout";
import IndexDashboard from './pages/dashboard/Dashboard';
import DashboardProduct from "./pages/dashboard/product/Product.jsx";
import DashboardProductShow from "./pages/dashboard/product/ProductShow.jsx";


const initRoute = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]);

function RouterData () {
  return (
    <RouterProvider router={initRoute} />
  );
}

function RouterDeclarative () {
  return (
    <BrowserRouter>
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

      </Routes>
    </BrowserRouter>
  );
}

export { RouterDeclarative, RouterData };