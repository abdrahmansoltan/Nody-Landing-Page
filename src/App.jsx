import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home.component";

const routes = [{ path: "/", component: Home }];
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
