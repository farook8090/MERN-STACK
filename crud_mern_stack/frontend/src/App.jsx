import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import ReadUser from "./ReadUser";
import UpdateUser from "./UpdateUser";
import Navbar from "./components/Navbar";

function App() {
  const container = {
    width: "90%",
    margin: "0 auto",
    paddingInline: "1rem",
  };
  return (
    <div style={container}>
      {/* <Navbar /> */}
      <nav style={{ paddingTop: "8px" }}>
        <h2 className="text-center text-orange-600 font-[800] text-[2rem]">
          CRUD APPLICATION{" "}
          <span className="text-black">
            {" "}
            <br /> USING{" "}
          </span>{" "}
          <br /> REACT-JS EXPRESS NODE-JS MONGO-DB
        </h2>
      </nav>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/read/:id" element={<ReadUser />} />
          <Route path="/updateuser/:id" element={<UpdateUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
