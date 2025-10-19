import React from 'react';

const DueByAgeSummary = ({ data, penaltyData }) => {
  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN').format(amount);
  };

  return (
    <div className="due-days-bg rounded-lg p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="queues-title-clr font-bold fs-16 mb-1">{data.title}</h3>
          <p className="fs-12 due-days-clr">{data.subtitle}</p>
        </div>
        
        <div >
          <div className="flex items-center space-x-2">
            <h4 className="fs-12 due-days-clr">{penaltyData.title}</h4>
            <div className="flex items-center space-x-1 bg-white rounded-lg shadow-sm p-2 min-w-[150px]">
              <span className="text-sm text-gray-500">₹</span>
              <span className="fs-18 font-bold">{formatAmount(penaltyData.amount)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
        {data.periods.map((period, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-200">
            <div >
              <h4 className="fs-14 mb-2 due-days-clr">{period.days}</h4>
              <div className="flex items-center  space-x-1">
                <span className="text-sm text-gray-500">₹</span>
                <span className="fs-18 font-bold ">{formatAmount(period.amount)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DueByAgeSummary;
