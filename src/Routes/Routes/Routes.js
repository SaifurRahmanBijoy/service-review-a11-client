import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceById from "../../Pages/ServiceAndReview/ServiceById/ServiceById";
import Services from "../../Pages/Services/Services";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://a11-service-review-server-saifurrahmanbijoy.vercel.app/home"
          ),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () =>
          fetch(
            "https://a11-service-review-server-saifurrahmanbijoy.vercel.app/services"
          ),
      },
      {
        path: "/services/:id",
        element: <ServiceById></ServiceById>,
        loader: ({ params }) =>
          fetch(
            `https://a11-service-review-server-saifurrahmanbijoy.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoutes>
            <MyReviews />
          </PrivateRoutes>
        ),
      },
      {
        path: "/addServices",
        element: (
          <PrivateRoutes>
            <AddServices></AddServices>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <p className="text-4xl text-center my-4 text-blue-400">
          404 not found:Please Enter Correctly
        </p>
      </div>
    ),
  },
]);
export default router;
