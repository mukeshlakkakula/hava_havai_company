import "./App.css";

import Sidebar from "./components/SideBar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Header />
      <div className="d-flex w-100 ">
        <Sidebar />

        <Routes>
          <Route exact path="/Airports" Component={Body} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
