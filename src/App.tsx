import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  return (
    <>
      <div className="fixed right-4 top-4 z-[120]">
        <ThemeToggle />
      </div>
      <RouterProvider router={router} />
    </>
  );
}
