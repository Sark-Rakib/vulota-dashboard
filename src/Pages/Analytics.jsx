import { useState } from "react";
import Sidebar from "../Component/Sidebar";
import Card from "../Component/Card";
import Chart from "../Component/Chart";
import {
  trafficData,
  activityData,
  deviceData,
  topPagesData,
  conversionData,
  analyticsMetrics,
} from "../Data/analytics";
import {
  Users,
  Eye,
  Clock,
  TrendingUp,
  Smartphone,
  Monitor,
  Tablet,
  Menu,
} from "lucide-react";

const Analytics = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar open={sidebarOpen} />

      <div className="flex-1 p-4 md:p-6">
        {/* Header */}
        {/* <div className="flex items-center justify-between mb-6">
          <button
            className="md:hidden p-2 rounded-lg bg-white shadow"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
            <p className="text-gray-600">
              Monitor your website performance and user activity
            </p>
          </div>
        </div> */}

        <div className="flex sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center justify-between gap-3">
            <button
              className="md:hidden p-2 bg-white shadow rounded-lg"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu size={20} />
            </button>

            <div>
              <h1 className="text-xl sm:text-2xl font-bold">Analytics</h1>
              <p className="text-xs sm:text-sm text-gray-600">
                Monitor your website performance and user activity
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card
            title="Total Visitors"
            value={analyticsMetrics.totalVisitors.toLocaleString()}
            subtitle="Last 30 days"
            icon={<Users size={20} />}
            trend="up"
            trendValue="12.5"
          />
          <Card
            title="Page Views"
            value={analyticsMetrics.totalPageViews.toLocaleString()}
            subtitle="Last 30 days"
            icon={<Eye size={20} />}
            trend="up"
            trendValue="8.2"
          />
          <Card
            title="Avg. Session Duration"
            value={analyticsMetrics.avgSessionDuration}
            subtitle="Per session"
            icon={<Clock size={20} />}
          />
          <Card
            title="Conversion Rate"
            value={`${analyticsMetrics.conversionRate}%`}
            subtitle="Goal completions"
            icon={<TrendingUp size={20} />}
            trend="up"
            trendValue="3.1"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Traffic Overview */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Traffic Overview
            </h2>
            <Chart
              type="area"
              data={trafficData}
              dataKey="visitors"
              xAxisKey="date"
              height={250}
              colors={["#3b82f6"]}
            />
          </div>

          {/* User Activity by Hour */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              User Activity by Hour
            </h2>
            <Chart
              type="line"
              data={activityData}
              dataKey="activeUsers"
              xAxisKey="hour"
              height={250}
              colors={["#10b981"]}
            />
          </div>

          {/* Device Breakdown */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Device Breakdown
            </h2>
            <Chart type="pie" data={deviceData} dataKey="value" height={250} />
          </div>

          {/* Conversion Trends */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Conversion Trends
            </h2>
            <Chart
              type="bar"
              data={conversionData}
              dataKey="conversions"
              xAxisKey="month"
              height={250}
              colors={["#f59e0b"]}
            />
          </div>
        </div>

        {/* Additional Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Top Pages */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Top Pages
            </h2>
            <div className="space-y-3">
              {topPagesData.map((page, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-mono text-gray-600">
                      {page.page}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">
                      {page.views.toLocaleString()} views
                    </span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${page.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {page.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Stats
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Monitor size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">Desktop</span>
                </div>
                <span className="font-medium">65%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Smartphone size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">Mobile</span>
                </div>
                <span className="font-medium">28%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Tablet size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">Tablet</span>
                </div>
                <span className="font-medium">7%</span>
              </div>
              <hr className="my-4" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Bounce Rate</span>
                <span className="font-medium text-red-600">
                  {analyticsMetrics.bounceRate}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Active Users</span>
                <span className="font-medium text-green-600">
                  {analyticsMetrics.activeUsers.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
