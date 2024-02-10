import { Routes, Route } from "react-router-dom";
import Home from "./home/home";
import Page from "./mainPage/mainPage";

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Page />} />
    </Routes>
  );
}

export default routes;
