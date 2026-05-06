import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import StudyCaseQuipper from "./pages/StudyCaseQuipper";

export const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/study/quipper-import", Component: StudyCaseQuipper },
]);
