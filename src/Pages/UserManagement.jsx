import { useState } from "react";
import Sidebar from "../Component/Sidebar";
import Card from "../Component/Card";
import Table from "../Component/Table";
import { users, userRoles, userStatuses } from "../Data/users";
import { UserPlus, Search, Menu } from "lucide-react";

const UserManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || user.status === statusFilter;
    const matchesRole = roleFilter === "all" || user.role === roleFilter;

    return matchesSearch && matchesStatus && matchesRole;
  });

  const getStatusColor = (status) => {
    const statusObj = userStatuses.find((s) => s.value === status);
    return statusObj ? statusObj.color : "bg-gray-100 text-gray-800";
  };

  const getRoleColor = (role) => {
    switch (role) {
      case "Admin":
        return "bg-red-100 text-red-800";
      case "Security Analyst":
        return "bg-blue-100 text-blue-800";
      case "Manager":
        return "bg-purple-100 text-purple-800";
      case "Developer":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const userColumns = [
    {
      key: "name",
      label: "Name",
      sortable: true,
      render: (value, user) => (
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-medium">
              {value
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div className="min-w-0">
            <div className="font-medium truncate">{value}</div>
            <div className="text-xs text-gray-500 truncate">{user.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: "role",
      label: "Role",
      sortable: true,
      render: (value) => (
        <span
          className={`px-2 py-1 text-xs rounded-full ${getRoleColor(value)}`}
        >
          {value}
        </span>
      ),
    },
    { key: "department", label: "Department", sortable: true },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (value) => (
        <span
          className={`px-2 py-1 text-xs rounded-full ${getStatusColor(value)}`}
        >
          {value}
        </span>
      ),
    },
    {
      key: "lastLogin",
      label: "Last Login",
      sortable: true,
      render: (value) =>
        value ? new Date(value).toLocaleDateString() : "Never",
    },
    {
      key: "createdAt",
      label: "Created",
      sortable: true,
      render: (value) => new Date(value).toLocaleDateString(),
    },
  ];

  return (
    <div className="flex bg-gray-50 min-h-screen overflow-x-hidden">
      <Sidebar open={sidebarOpen} />

      <div className="flex-1 p-3 sm:p-4 md:p-6 overflow-x-hidden">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center justify-between sm:justify-start gap-3">
            <button
              className="sm:hidden p-2 bg-white shadow rounded-lg"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu size={20} />
            </button>

            <div>
              <h1 className="text-xl sm:text-2xl font-bold">User Management</h1>
              <p className="text-xs sm:text-sm text-gray-600">
                Manage user accounts and roles
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg w-full sm:w-auto"
          >
            <UserPlus size={16} />
            Add User
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <Card title="Total" value={users.length} />
          <Card
            title="Active"
            value={users.filter((u) => u.status === "Active").length}
          />
          <Card
            title="Inactive"
            value={users.filter((u) => u.status === "Inactive").length}
          />
          <Card
            title="Pending"
            value={users.filter((u) => u.status === "Pending").length}
          />
        </div>

        {/* FILTERS */}
        <div className="bg-white p-3 sm:p-4 rounded-2xl mb-6 overflow-x-hidden">
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
              <input
                className="w-full pl-9 pr-3 py-2 border rounded-lg"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <select
                className="border px-3 py-2 rounded-lg w-full sm:w-auto"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                {userStatuses.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>

              <select
                className="border px-3 py-2 rounded-lg w-full sm:w-auto"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <option value="all">All Roles</option>
                {userRoles.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* TABLE WRAPPER SAFE */}
        <div className="bg-white rounded-2xl overflow-x-auto">
          <Table
            data={filteredUsers}
            columns={userColumns}
            searchable={false}
            filterable={false}
            sortable={true}
            pagination={true}
            itemsPerPage={10}
          />
        </div>

        {/* MODAL */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-3 z-50">
            <div className="bg-white w-full max-w-md rounded-2xl p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
              <h2 className="text-lg font-semibold mb-4">Add User</h2>

              <div className="space-y-3">
                <input
                  className="w-full border p-2 rounded"
                  placeholder="Name"
                />
                <input
                  className="w-full border p-2 rounded"
                  placeholder="Email"
                />
              </div>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 bg-gray-200 py-2 rounded"
                >
                  Cancel
                </button>
                <button className="flex-1 bg-blue-600 text-white py-2 rounded">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
