import React from 'react';

const MetricCard = ({ metric }) => {
  const iconMap = {
    'document': '/src/assets/icons/invoice.ico',
    'hand-money': '/src/assets/icons/payable_amount.ico',
    'clock': '/src/assets/icons/overdue.ico',
    'check-money': '/src/assets/icons/paid_amnt.ico',
    'cross': '/src/assets/icons/rejected.ico',
    'exclamation-speech': '/src/assets/icons/Dispute.ico',
    'building': '/src/assets/icons/departments.ico',
    'people': '/src/assets/icons/vendors.ico'
  };

  const colorMap = {
    'blue': 'text-blue-500',
    'orange': 'text-orange-500', 
    'red': 'text-red-500',
    'green': 'text-green-500',
    'purple': 'text-purple-500'
  };

  const iconPath = iconMap[metric.icon] || '/src/assets/icons/invoice.ico';
  const iconColor = colorMap[metric.color] || 'text-gray-500';

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN').format(amount);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center space-x-3 mb-3 sm:mb-4">
        <img 
          src={iconPath} 
          alt={metric.title} 
          className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor}`} 
        />
        <h3 className="metric-title">{metric.title}</h3>
      </div>
      
      <div className="space-y-2 sm:space-y-3 pl-6 sm:pl-8">
        <div className="flex  items-center">
          <span className="fs-14 text-gray-600">Total</span>
          <span className="fs-18 font-bold metric-total ms-3">{formatAmount(metric.total)}</span>
        </div>
        
        <div className="flex  items-center">
          <span className="fs-14 text-gray-600">₹</span>
          <span className="fs-18 font-bold metric-total ms-7">{formatAmount(metric.amount)}</span>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
