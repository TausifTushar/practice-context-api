import {
    createBrowserRouter,
    
  } from "react-router-dom";
import App from "../App";
import Details from "../Components/Details/Details";
import AddToCart from "../Components/Cart/AddToCart";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    },
    {
      path: "/Products/:id",
      element: <Details></Details>
    },
    {
      path: "/Cart",
      element: <AddToCart></AddToCart>
    }
  ]);

  export default router