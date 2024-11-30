import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./pages/App";
import BeforeAfter from "./pages/BeforeAfter";
import InkEffect from "./pages/InkEffect";

interface RouteElement {
  index?: boolean;
  label?: string;
  path: string;
  element: React.ReactNode;
}

export const routes: RouteElement[] = [
  {
    index: true,
    path: "/",
    element: <App />,
  },
  {
    index: true,
    label: "Before & After",
    path: "/before-after",
    element: <BeforeAfter />,
  },
  {
    index: true,
    label: "Ink effect",
    path: "/ink-effect",
    element: <InkEffect />,
  },
];

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Route>,
  ),
);
