// Analytics data for charts and metrics
export const trafficData = [
  { date: '2024-01-01', visitors: 1200, pageViews: 3400, bounceRate: 45 },
  { date: '2024-01-02', visitors: 1350, pageViews: 3800, bounceRate: 42 },
  { date: '2024-01-03', visitors: 1180, pageViews: 3200, bounceRate: 48 },
  { date: '2024-01-04', visitors: 1420, pageViews: 4100, bounceRate: 38 },
  { date: '2024-01-05', visitors: 1580, pageViews: 4500, bounceRate: 35 },
  { date: '2024-01-06', visitors: 1650, pageViews: 4800, bounceRate: 32 },
  { date: '2024-01-07', visitors: 1720, pageViews: 5200, bounceRate: 30 },
];

export const activityData = [
  { hour: '00:00', activeUsers: 120 },
  { hour: '04:00', activeUsers: 80 },
  { hour: '08:00', activeUsers: 450 },
  { hour: '12:00', activeUsers: 680 },
  { hour: '16:00', activeUsers: 720 },
  { hour: '20:00', activeUsers: 580 },
  { hour: '23:59', activeUsers: 320 },
];

export const deviceData = [
  { name: 'Desktop', value: 65, color: '#8884d8' },
  { name: 'Mobile', value: 28, color: '#82ca9d' },
  { name: 'Tablet', value: 7, color: '#ffc658' },
];

export const topPagesData = [
  { page: '/dashboard', views: 2450, percentage: 28 },
  { page: '/analytics', views: 1890, percentage: 22 },
  { page: '/users', views: 1560, percentage: 18 },
  { page: '/reports', views: 1230, percentage: 14 },
  { page: '/settings', views: 980, percentage: 11 },
  { page: '/other', views: 490, percentage: 7 },
];

export const conversionData = [
  { month: 'Jan', visitors: 12000, conversions: 480, rate: 4.0 },
  { month: 'Feb', visitors: 13500, conversions: 567, rate: 4.2 },
  { month: 'Mar', visitors: 11800, conversions: 424, rate: 3.6 },
  { month: 'Apr', visitors: 14200, conversions: 652, rate: 4.6 },
  { month: 'May', visitors: 15800, conversions: 790, rate: 5.0 },
  { month: 'Jun', visitors: 16500, conversions: 825, rate: 5.0 },
];

export const analyticsMetrics = {
  totalVisitors: 45280,
  totalPageViews: 128900,
  avgSessionDuration: '4:32',
  bounceRate: 38.5,
  conversionRate: 4.3,
  activeUsers: 3240,
};