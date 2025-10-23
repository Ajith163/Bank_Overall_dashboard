import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const AnimatedDonutChart = ({ data, title = false }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  const colorMap = {
    'red': '#EF4444',
    'teal': '#14B8A6',
    'dark-blue': '#1E40AF',
    'orange': '#F97316',
    'light-orange': '#FB923C',
    'dark-red': '#DC2626'
  };

  const getColor = (color) => colorMap[color] || '#6B7280';

  const chartData = data.map((item) => ({
    ...item,
    fill: getColor(item.color),
    percentage: Math.round((item.value / total) * 100)
  }));

  const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <g>
        <circle cx={x} cy={y} r="15" fill="white" stroke="#e5e7eb" strokeWidth="1" />
        <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize="10" fontWeight="600" fill="#374151">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      </g>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold fnt-clr mb-4 sm:mb-6">{title}</h3>
      
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
          <ResponsiveContainer width="100%" height="100%" minHeight={192}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius="40%"
                outerRadius="70%"
                paddingAngle={2}
                dataKey="value"
                animationBegin={0}
                animationDuration={1000}
                animationEasing="ease-out"
                label={renderLabel}
                labelLine={false}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="w-full lg:w-auto space-y-2 sm:space-y-3">
          {chartData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.fill }}></div>
              <span className="text-xs sm:text-sm truncate queues-title-clr fs-14">{item.label}</span>
              {/* <span className="text-xs sm:text-sm font-medium text-gray-600 flex-shrink-0">{item.percentage}%</span> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedDonutChart;
