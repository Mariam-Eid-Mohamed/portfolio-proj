import "./App.css";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import SideBar from "./components/SideBar/SideBar";
import NotFound from "./components/NotFound/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MasterLayout from "./components/MasterLayout/MasterLayout";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "work",
          element: <Work />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "experience",
          element: <Experience />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}> </RouterProvider>
    </>
  );
}

export default App;
