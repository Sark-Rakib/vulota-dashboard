import { useState } from "react";
import Sidebar from "../Component/Sidebar";
import Card from "../Component/Card";
import Table from "../Component/Table";
import { activityLogs, reportFilters, activityStats } from "../Data/reports";
import {
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  Menu,
  Filter,
} from "lucide-react";

const Reports = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredLogs = (activityLogs || []).filter((log) => {
    const categoryMatch =
      selectedCategory === "all" || log.category === selectedCategory;
    const statusMatch =
      selectedStatus === "all" || log.status === selectedStatus;

    return categoryMatch && statusMatch;
  });

  const tableColumns = [
    {
      key: "timestamp",
      label: "Time",
      sortable: true,
      render: (value) => new Date(value).toLocaleString(),
      hideOnMobile: true,
    },
    {
      key: "user",
      label: "User",
      sortable: true,
    },
    {
      key: "action",
      label: "Action",
      sortable: true,
    },
    {
      key: "details",
      label: "Details",
      hideOnMobile: true,
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      filterable: true,
      filterOptions: reportFilters.statuses,
    },
    {
      key: "category",
      label: "Category",
      sortable: true,
      filterable: true,
      filterOptions: reportFilters.categories,
      hideOnMobile: true,
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "success":
        return <CheckCircle size={16} className="text-green-500" />;
      case "warning":
        return <AlertTriangle size={16} className="text-yellow-500" />;
      case "error":
        return <XCircle size={16} className="text-red-500" />;
      case "info":
        return <Info size={16} className="text-blue-500" />;
      default:
        return <Activity size={16} className="text-gray-500" />;
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} />

      {/* Main */}
      <div className="flex-1 p-3 sm:p-4 md:p-6 overflow-x-hidden w-full">
        {/* Header */}
        <div className="flex items-center justify-between sm:flex-row sm:items-center sm:justify-between gap-25 mb-6">
          <button
            className="md:hidden p-2 rounded-lg bg-white shadow w-fit"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu size={20} />
          </button>

          <div className="w-full">
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900">
              Reports & Activity Logs
            </h1>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 w-full">
          <Card title="Total" value={activityStats.totalActivities} />
          <Card title="Today" value={activityStats.todayActivities} />
          <Card title="Users" value={activityStats.activeUsers} />
          <Card
            title="Issues"
            value={activityStats.errors + activityStats.warnings}
          />
        </div>

        {/* Filters */}
        <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-sm border mb-6 w-full">
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center w-full">
            <div className="flex items-center gap-2 text-gray-600">
              <Filter size={18} />
              <span className="font-medium">Filters</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-1 w-full">
              <select
                className="border px-3 py-2 rounded-lg w-full"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {reportFilters.categories.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>

              <select
                className="border px-3 py-2 rounded-lg w-full"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                {reportFilters.statuses.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-sm text-gray-500 whitespace-nowrap">
              {filteredLogs.length} / {activityLogs.length}
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-3 mb-6">
          {filteredLogs.slice(0, 5).map((log) => (
            <div
              key={log.id}
              className="bg-white p-4 rounded-xl shadow-sm border w-full"
            >
              <div className="flex justify-between items-center">
                <div className="font-medium text-sm">{log.action}</div>
                {getStatusIcon(log.status)}
              </div>
              <p className="text-xs sm:text-sm text-gray-600">{log.details}</p>
              <div className="text-xs text-gray-500 mt-2">
                {log.user} • {log.location}
              </div>
            </div>
          ))}
        </div>

        {/* Table Desktop */}
        <div className="hidden lg:block w-full overflow-x-hidden">
          <Table
            data={filteredLogs}
            columns={tableColumns}
            searchable={true}
            filterable={true}
            sortable={true}
            pagination={true}
            itemsPerPage={10}
          />
        </div>
      </div>
    </div>
  );
};

export default Reports;
