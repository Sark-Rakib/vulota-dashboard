import { User, Shield } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex sticky top-0 z-50 items-center justify-between bg-white px-4 py-3 border-b border-gray-200 shadow-sm">
      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-red-600" />
          <span className="text-xl font-bold text-gray-900">Vulota</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Profile */}
        <NavLink
          to="/dashboard"
          className="flex items-center gap-2 cursor-pointer"
        >
          <User size={20} />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
