import { Home } from "./pages/home";
import { Carts } from "./pages/carts";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/carts',
        element: <Carts />
      }
    ] 
  }
])