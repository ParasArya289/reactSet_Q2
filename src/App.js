import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AllBooks } from "./pages/AllBooks";
import { Favorite } from "./pages/Favorite";
import { Read } from "./pages/Read";
import { Profile } from "./pages/Profile";
import { useContext } from "react";
import { DataContext } from "./context/dataContext";
export default function App() {
  const { read, favorite } = useContext(DataContext);
  const navStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline 3px" : "none",
      textUnderlineOffset: isActive ? "20px" : "none",
      color: isActive ? "grey" : "white",
      padding: "6px"
    };
  };
  return (
    <div className="App">
      <nav
        style={{
          backgroundColor: "black",
          padding: "20px",
          borderRadius: "6px"
        }}
      >
        <NavLink style={navStyle} to="/">
          All
        </NavLink>
        <NavLink style={navStyle} to="/favorite">
          Favorite ({favorite.length})
        </NavLink>
        <NavLink style={navStyle} to="/read">
          Read ({read.length})
        </NavLink>
        <NavLink style={navStyle} to="/profile">
          Profile
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<AllBooks />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/read" element={<Read />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
