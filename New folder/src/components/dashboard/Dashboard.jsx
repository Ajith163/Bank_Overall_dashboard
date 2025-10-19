import React from 'react';
import dashboardData from '../../data/dashboardData.json';
import MetricCard from './MetricCard';
import AnimatedDonutChart from './AnimatedDonutChart';
import DueByAgeSummary from './DueByAgeSummary';
import DynamicHeader from '../layout/DynamicHeader';

const Dashboard = () => {
  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN').format(amount);
  };

  return (
    <div className="space-y-5">
      <DynamicHeader />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="inline-block bg-white rounded-lg shadow-sm px-3 py-2 sm:px-4 sm:py-3">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <h2 className="fs-16  text-gray-800">Over all outstanding</h2>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="font-bold text-gray-600">₹</span>
              <span className="outstanding-count font-bold text-gray-900 text-lg sm:text-xl">
                {formatAmount(dashboardData.overallOutstanding.amount)}
              </span>
            </div>
          </div>
        </div>
        
       
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {dashboardData.metrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        <AnimatedDonutChart 
          data={dashboardData.charts.queues.segments} 
          title={dashboardData.charts.queues.title}
        />
        <AnimatedDonutChart 
          data={dashboardData.charts.kpi.segments} 
          title={dashboardData.charts.kpi.title}
          showPercentages={true}
        />
      </div>

      <DueByAgeSummary 
        data={dashboardData.dueByAge} 
        penaltyData={dashboardData.penaltySaved}
      />
    </div>
  );
};

export default Dashboard;
