import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Places from "../../Pages/Places/Places";
import Booking from "../../Pages/Booking/Booking";
import Contact from "../../Pages/Contact/Contact";
import InvalidPage from "../../Pages/InvalidPage/InvalidPage";
import Main from "../../Layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/places",
        element: <Places></Places>,
        loader: () =>
          fetch('http://localhost:5000/places'),
      },
      {
        path: "/booking",
        element: <Booking></Booking>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "*",
    element: <InvalidPage></InvalidPage>,
  },
]);

export default router;
