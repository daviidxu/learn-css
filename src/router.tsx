import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./pages/App";
import BeforeAfter from "./pages/BeforeAfter";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<App />} />
      <Route path="/before-after" element={<BeforeAfter />} />
    </Route>,
  ),
);
