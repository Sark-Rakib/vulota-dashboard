import React from "react";
import { Link } from "react-router";
import {
  Shield,
  Target,
  BarChart3,
  Users,
  FileText,
  Zap,
  ArrowRight,
  CheckCircle,
  Activity,
  TrendingUp,
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Security Insights",
      description:
        "Advanced offensive security operations and vulnerability exploitation tracking",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Comprehensive traffic analysis, user activity monitoring, and performance metrics",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: FileText,
      title: "Activity Reports",
      description:
        "Detailed logging and reporting of all system activities and security events",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Users,
      title: "User Management",
      description:
        "Complete user account management with role-based access control",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const stats = [
    { value: "500+", label: "Vulnerabilities Tracked" },
    { value: "50+", label: "Active Campaigns" },
    { value: "99.9%", label: "System Uptime" },
    { value: "24/7", label: "Monitoring" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse"></div>
                <Shield className="relative h-20 w-20 text-red-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Offensive Security
              <span className="block text-red-600">Operations Platform</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Advanced vulnerability assessment, penetration testing campaigns,
              and comprehensive security monitoring. Take control of your
              offensive security operations with real-time insights and
              automated reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                Access Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/security"
                className="inline-flex items-center px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors"
              >
                View Security Insights
              </Link>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-100 rounded-full opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-20"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Security Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for offensive security operations, from
              reconnaissance to exploitation tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Advanced Offensive Security Capabilities
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Vulnerability Exploitation
                    </h3>
                    <p className="text-gray-600">
                      Track and manage zero-day discoveries and exploit
                      development
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Penetration Testing
                    </h3>
                    <p className="text-gray-600">
                      Manage red team campaigns and security assessments
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Real-time Monitoring
                    </h3>
                    <p className="text-gray-600">
                      24/7 security monitoring and automated alerting
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Comprehensive Reporting
                    </h3>
                    <p className="text-gray-600">
                      Detailed activity logs and executive summaries
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-linear-to-br from-red-50 to-blue-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Activity className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">
                      Real-time
                    </div>
                    <div className="text-sm text-gray-600">Monitoring</div>
                  </div>
                  <div className="text-center">
                    <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">
                      Target
                    </div>
                    <div className="text-sm text-gray-600">Analysis</div>
                  </div>
                  <div className="text-center">
                    <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">
                      Exploit
                    </div>
                    <div className="text-sm text-gray-600">Development</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">
                      Analytics
                    </div>
                    <div className="text-sm text-gray-600">Dashboard</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Control of Your Security Operations?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join leading organizations using Vulota for advanced offensive
            security operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center px-8 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/security"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Explore Security Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
