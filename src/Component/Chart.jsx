import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ data, type = "line", title = "", height = 300 }) => {
  const colors = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6"];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={height}>
        {type === "line" && (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {Object.keys(data[0] || {})
              .filter((key) => key !== "name")
              .map((key, idx) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={colors[idx % colors.length]}
                  strokeWidth={2}
                />
              ))}
          </LineChart>
        )}
        {type === "bar" && (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {Object.keys(data[0] || {})
              .filter((key) => key !== "name")
              .map((key, idx) => (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={colors[idx % colors.length]}
                />
              ))}
          </BarChart>
        )}
        {type === "area" && (
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {Object.keys(data[0] || {})
              .filter((key) => key !== "name")
              .map((key, idx) => (
                <Area
                  key={key}
                  type="monotone"
                  dataKey={key}
                  fill={colors[idx % colors.length]}
                  stroke={colors[idx % colors.length]}
                  fillOpacity={0.3}
                />
              ))}
          </AreaChart>
        )}
        {type === "pie" && (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
