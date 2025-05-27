import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFoundPage";
import Signup from "./pages/Signup";
import SignupSuccess from "./pages/SignupSuccess";
import HomeLayout from "./layout/HomeLayout";
import GlobalStyle from "./styles/GlobalStyle";
import PlanPage from "./pages/PlanPage";
import StorageBoxPage from "./pages/StorageBoxPage";
import DetailedInput from "./pages/DetailedInput";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signup-success",
    element: <SignupSuccess />,
  },
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "plan",
        element: <PlanPage />,
      },
      {
        path: "storage",
        element: <StorageBoxPage />,
      },
      {
        path: "detailed",
        element: <DetailedInput />,
      },
    ],
  },
  {
    path: "/main",
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
