import { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Menu } from "lucide-react";
import Sidebar from "../Component/Sidebar";

const data = [
  { name: "Mon", users: 30 },
  { name: "Tue", users: 45 },
  { name: "Wed", users: 60 },
  { name: "Thu", users: 40 },
  { name: "Fri", users: 80 },
];

function Card({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-sm text-gray-500">{title}</h2>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex bg-gray-100">
      <Sidebar open={open} />

      <div className="flex-1 p-4 ">
        <div className="flex items-center justify-between mb-4">
          <button
            className="md:hidden p-2 rounded-lg bg-white shadow hover:bg-gray-50 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card title="Total Users" value="1,200" />
          <Card title="Active Sessions" value="320" />
          <Card title="Threat Alerts" value="12" />
          <Card title="Revenue" value="$5,400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="mb-2 font-semibold">User Activity</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="mb-2 font-semibold">Traffic</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
