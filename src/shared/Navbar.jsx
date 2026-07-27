import { NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white font-semibold border-b-2 border-red-600 pb-0.5"
      : "text-gray-500 hover:text-white transition-colors";

  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b bg-black text-gray-900">
      <h1 className="font-bold text-xl tracking-wide text-white">CourseHub</h1>

      <div className="flex gap-6 items-center">
        <NavLink to="/Home" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/About" className={linkClass}>
      </div>

      <div className="flex gap-3">
       
      </div>
    </nav>
  );
}

export default Navbar;
