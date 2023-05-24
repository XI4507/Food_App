import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer.js";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
            <About />
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/grocery",
        element:(
          <Suspense fallback={<Shimmer />}>
            <Grocery/>
          </Suspense>
        )
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
