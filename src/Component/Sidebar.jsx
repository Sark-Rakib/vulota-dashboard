import { Link, useLocation } from "react-router";
import { BarChart3, Home, Users, FileText, Shield } from "lucide-react";
import { AiOutlineRollback } from "react-icons/ai";

const Sidebar = ({ open }) => {
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: Home },
    { path: "/analytics", label: "Analytics", icon: BarChart3 },
    { path: "/users", label: "Users", icon: Users },
    { path: "/reports", label: "Reports", icon: FileText },
    { path: "/security", label: "Security", icon: Shield },
    { path: "/", label: "Back to Home", icon: AiOutlineRollback },
  ];

  return (
    <div
      className={`bg-gray-50 h-full min-h-screen p-4 ${
        open ? "block" : "hidden"
      } md:block w-64 fixed md:relative z-10`}
    >
      <div className="mb-8">
        <Link to="/">
          <h1 className="text-xl font-bold text-gray-900">Vulota</h1>
        </Link>
      </div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
