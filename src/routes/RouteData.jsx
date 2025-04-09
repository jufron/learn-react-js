import { createBrowserRouter } from "react-router";
import Index from "../pages/Index";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/Dashboard.layout";
import IndexDashboard from '../pages/dashboard/Dashboard';
import DashboardProductShow from "../pages/dashboard/product/ProductShow.jsx";
import DashboardProduct from "../pages/dashboard/product/Product.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";
import DashboardUser from "../pages/dashboard/user/User.jsx";
import DashboardUserShow from '../pages/dashboard/user/UserShow.jsx';
import DashboardBlog from '../pages/dashboard/blog/blog.jsx';
import DashboardKategory from '../pages/dashboard/kategory/kategory.jsx';

const routerAuth = {
  Component: AuthLayout,
  children: [
    { path: 'login', Component: Login },
    { path: 'register', Component: Register }
  ]
};

const routerDashboard = {
  path: 'dashboard',
  Component: DashboardLayout,
  children: [
    { index: true, Component: IndexDashboard },
    {
      path: 'product',
      children: [
        { index: true, Component: DashboardProduct },
        { path: ':id', Component: DashboardProductShow }
      ]
    },
    {
      path: 'user',
      children: [
        { index: true, Component: DashboardUser },
        { path: ':id', Component: DashboardUserShow }
      ]
    },
    { path: 'kategory', Component: DashboardKategory },
    { path: 'blog', Component: DashboardBlog }
  ]
}

const router = createBrowserRouter([
  { index: true, Component: Index },
  { path: '/about', Component: About },
  routerAuth,
  routerDashboard
]);

export default router;