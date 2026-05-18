import { Routes, Route } from "react-router";

import MainLayout from "./layouts/MainLayout";
import HomeView from "./pages/HomeView";
import FloatingButton from "./components/FloatingButton";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route index element={<HomeView />} />
        </Route>
      </Routes>
      <FloatingButton />
    </>
  );
}

export default App;
