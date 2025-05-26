import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
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
    path: "/main",
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "plan",
        element: <PlanPage />,
      },
      {
        path: "storage",
        element: <StorageBoxPage />,
      },
      {
        path: "plan",
        element: <PlanPage/>,
      },
      {
        path: "detailed",
        element: <DetailedInput />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
