import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ActivateToken, Login, SignUp, HomePage} from "./Route.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
// import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "/activation/:activation_token",
    element: <ActivateToken />,
  },
  // {
  //   path: "/",
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: "",
  //       element: <Home />,
  //     },
  //     {
  //       path: "/register",
  //       element: <Register />,
  //     },
  //     {
  //       path: "/login",
  //       element: <Login />,
  //     },
  //     {
  //       path: "*",
  //       element: <NotFound />,
  //     },

  //     {
  //       element: <PrivateRouter />,
  //       children: [
  //         {
  //           path: "/job/getall",
  //           element: <Jobs />,
  //         },
  //         {
  //           path: "/job/:id",
  //           element: <JobDetails />,
  //         },
  //         {
  //           path: "/application/:id",
  //           element: <Application />,
  //         },
  //         {
  //           path: "/applications/me",
  //           element: <MyApplications />,
  //         },
  //         {
  //           path: "/job/post",
  //           element: <PostJob />,
  //         },
  //         {
  //           path: "/job/me",
  //           element: <MyJobs />,
  //         },
  //       ],
  //     },
  //   ],
  // },
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
