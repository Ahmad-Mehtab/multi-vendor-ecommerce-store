import React from "react";
import ReactDOM from "react-dom/client";
// import { persistor, store } from "./redux/store.js";
// import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login, SignUp } from "./Route.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
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
  <QueryClientProvider  client={queryClient}>
  <RouterProvider router={router} />
  </QueryClientProvider>
);

{
  /* <Provider store={store}>
<PersistGate loading={null} persistor={persistor}>
<RouterProvider router={router} />
</PersistGate>
</Provider> */
}
