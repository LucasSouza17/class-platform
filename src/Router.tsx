import { Route, Routes } from "react-router-dom";
import { Platform } from "./pages/Platform";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/platform" element={<Platform />} />
      <Route path="/platform/lesson/:slug" element={<Platform />} />
    </Routes>
  )
}