import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  ActivateToken,
  Login,
  SignUp,
  HomePage,
  ProductPage,
  BestSelling,
  EventsPage,
  FAQ,
  ProductDetailPage,
  ProfilePage,
} from "./Route.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
// import { Provider } from "react-redux";
import PrivateRouter from "./PrivateRouter";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <PrivateRouter />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },

          {
            path: "/activation/:activation_token",
            element: <ActivateToken />,
          },
          {
            path: "/products",
            element: <ProductPage />,
          },
          {
            path: "/products/:name",
            element: <ProductDetailPage />,
          },
          {
            path: "/best-selling",
            element: <BestSelling />,
          },
          {
            path: "/events",
            element: <EventsPage />,
          },
          {
            path: "/faq",
            element: <FAQ />,
          },
          {
            path: "/profile",
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },

  
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      retry: 3,
      retryDelay: 1000,
      staleTime: 60000,
      cacheTime: 600000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <ToastContainer position="top-right" />
      </PersistGate>
    </Provider>
  </QueryClientProvider>
);
