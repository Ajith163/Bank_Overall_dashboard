import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const AnimatedDonutChart = ({ data, title = false }) => {
  const total = data.reduce((sum, res) => sum + res.value, 0);
  
  const getColor = (color) => {
    const colorMap = {
      'red': '#EF4444',
      'teal': '#14B8A6',
      'dark-blue': '#1E40AF',
      'orange': '#F97316',
      'light-orange': '#FB923C',
      'dark-red': '#DC2626'
    };
    return colorMap[color] || '#6B7280';
  };

  const chartData = data.map((res) => ({
    ...res,
    fill: getColor(res.color),
    percentage: Math.round((res.value / total) * 100)
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-sm font-semibold text-gray-800">{data.label}</p>
          <p className="text-lg font-bold text-gray-900">{data.percentage}%</p>
          <p className="text-xs text-gray-500">Value: {data.value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold fnt-clr  mb-4 sm:mb-6">{title}</h3>
      
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                animationBegin={0}
                animationDuration={1000}
                animationEasing="ease-out"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="w-full lg:w-auto space-y-2 sm:space-y-3">
          {chartData.map((res, index) => (
            <div key={index} className="flex items-center space-x-2 sm:space-x-3">
              <div 
                className="w-2 h-2 sm:w-3 sm:h-3 rounded-full flex-shrink-0" 
                style={{ backgroundColor: res.fill }}
              ></div>
              <span className="text-xs sm:text-sm  truncate queues-title-clr fs-14">{res.label}</span>
              {/* {Percentages && (
                <span className="text-xs sm:text-sm font-medium text-gray-600 flex-shrink-0">{res.percentage}%</span>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedDonutChart;
