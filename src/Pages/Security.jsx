import { useState } from "react";
import Sidebar from "../Component/Sidebar";
import Card from "../Component/Card";
import Table from "../Component/Table";
import {
  vulnerabilityData,
  pentestCampaigns,
  exploitDevelopment,
  reconnaissanceData,
  attackVectors,
  securityMetrics,
} from "../Data/security";
import { Shield, Target, Zap, Bug, Eye, Menu } from "lucide-react";

const Security = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case "critical":
        return "bg-red-100 text-red-800";
      case "high":
        return "bg-orange-100 text-orange-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "exploited":
        return "bg-red-100 text-red-800";
      case "weaponized":
        return "bg-purple-100 text-purple-800";
      case "verified":
        return "bg-blue-100 text-blue-800";
      case "active":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      case "planning":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const vulnerabilityColumns = [
    { key: "target", label: "Target", sortable: true },
    { key: "vulnerability", label: "Vulnerability", sortable: true },
    {
      key: "severity",
      label: "Severity",
      sortable: true,
      render: (value) => (
        <span
          className={`px-2 py-1 text-xs rounded-full ${getSeverityColor(value)}`}
        >
          {value}
        </span>
      ),
    },
    { key: "cvss", label: "CVSS", sortable: true },
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
    { key: "impact", label: "Impact", sortable: false },
    {
      key: "discovered",
      label: "Discovered",
      sortable: true,
      render: (value) => new Date(value).toLocaleDateString(),
    },
  ];

  const campaignColumns = [
    { key: "name", label: "Campaign Name", sortable: true },
    { key: "target", label: "Target", sortable: true },
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
      key: "progress",
      label: "Progress",
      sortable: true,
      render: (v) => `${v}%`,
    },
    { key: "findings", label: "Findings", sortable: true },
    { key: "critical", label: "Critical", sortable: true },
    { key: "startDate", label: "Start Date", sortable: true },
  ];

  return (
    <div className="flex bg-gray-50 min-h-screen overflow-x-hidden">
      <Sidebar open={sidebarOpen} />

      <div className="flex-1 p-3 sm:p-4 md:p-6 overflow-x-hidden">
        {/* HEADER */}
        <div className="flex items-center justify-between md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <button
            className="md:hidden p-2 bg-white shadow rounded-lg w-fit"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu size={20} />
          </button>

          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Security Insights</h1>
            <p className="text-sm text-gray-600">
              Offensive security operations and vulnerability exploitation
            </p>
          </div>
        </div>

        {/* TABS */}
        <div className="bg-white rounded-2xl shadow-sm border mb-6 overflow-x-auto">
          <div className="flex flex-nowrap md:flex-wrap gap-1 p-1 min-w-max md:min-w-0">
            {[
              { id: "overview", label: "Overview", icon: Shield },
              { id: "vulnerabilities", label: "Vulnerabilities", icon: Bug },
              { id: "campaigns", label: "Campaigns", icon: Target },
              { id: "exploits", label: "Exploit Dev", icon: Zap },
              { id: "recon", label: "Recon", icon: Eye },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-sm ${
                    activeTab === tab.id
                      ? "bg-red-50 text-red-700"
                      : "text-gray-600"
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card
                title="Vulns"
                value={securityMetrics.totalVulnerabilities}
              />
              <Card
                title="Critical"
                value={securityMetrics.criticalVulnerabilities}
              />
              <Card title="Campaigns" value={securityMetrics.activeCampaigns} />
              <Card
                title="Zero-day"
                value={securityMetrics.zeroDayDiscoveries}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Attack Vectors */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl">
                <h2 className="font-semibold mb-4">Attack Vectors</h2>
                <div className="space-y-3">
                  {attackVectors.map((v, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded-lg text-sm">
                      {v.name} - {v.successRate}%
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Exploits */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl">
                <h2 className="font-semibold mb-4">Recent Exploits</h2>
                <div className="space-y-3">
                  {vulnerabilityData.slice(0, 5).map((v) => (
                    <div
                      key={v.id}
                      className="p-3 bg-gray-50 rounded-lg text-sm"
                    >
                      {v.vulnerability}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* TABLE WRAPPER SAFE */}
        {activeTab === "vulnerabilities" && (
          <div className="bg-white rounded-2xl overflow-x-auto">
            <Table data={vulnerabilityData} columns={vulnerabilityColumns} />
          </div>
        )}

        {activeTab === "campaigns" && (
          <div className="bg-white rounded-2xl overflow-x-auto">
            <Table data={pentestCampaigns} columns={campaignColumns} />
          </div>
        )}

        {activeTab === "exploits" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exploitDevelopment.map((e) => (
              <div key={e.id} className="bg-white p-4 rounded-2xl">
                {e.name}
              </div>
            ))}
          </div>
        )}

        {activeTab === "recon" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {reconnaissanceData.map((r) => (
              <div key={r.target} className="bg-white p-4 rounded-2xl">
                {r.target}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Security;
