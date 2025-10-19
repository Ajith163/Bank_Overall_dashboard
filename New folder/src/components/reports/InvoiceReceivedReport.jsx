import React, { useState } from 'react';
import { FiSearch, FiFilter, FiChevronDown } from 'react-icons/fi';
import DynamicHeader from '../layout/DynamicHeader';
import invoiceData from '../../data/invoiceData.json';

const InvoiceReceivedReport = () => {
  const [selectedTab, setSelectedTab] = useState('approval');
  const [selectedRows, setSelectedRows] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN').format(amount);
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedRows(invoiceData.invoiceData.map(item => item.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id) => {
    setSelectedRows(prev => 
      prev.includes(id) 
        ? prev.filter(rowId => rowId !== id)
        : [...prev, id]
    );
  };

  const handleRowClick = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <DynamicHeader />

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6">
        <div className="flex space-x-2">
          <button
            onClick={() => setSelectedTab('approval')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
              selectedTab === 'approval'
                ? 'text-white fs-14'
                : 'bg-gray-100 text-gray-600 fs-14 hover:bg-gray-200'
            }`}
            style={selectedTab === 'approval' ? {backgroundColor: '#13255B'} : {}}
          >
            Approval
          </button>
          <button
            onClick={() => setSelectedTab('rejected')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
              selectedTab === 'rejected'
                ? 'text-white fs-14'
                : 'bg-gray-100 text-gray-600 fs-14 hover:bg-gray-200'
            }`}
            style={selectedTab === 'rejected' ? {backgroundColor: '#13255B'} : {}}
          >
            Rejected
          </button>
          <button
            onClick={() => setSelectedTab('pending')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
              selectedTab === 'pending'
                ? 'text-white fs-14'
                : 'bg-gray-100 text-gray-600 fs-14 hover:bg-gray-200'
            }`}
            style={selectedTab === 'pending' ? {backgroundColor: '#13255B'} : {}}
          >
            Pending
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="relative w-full sm:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-600 placeholder-gray-400 w-full sm:w-64"
            />
          </div>

          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 w-full sm:w-auto">
            <FiFilter className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-2 sm:px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === invoiceData.invoiceData.length}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600">No</th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600">Company</th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600 hidden sm:table-cell">
                  GST/PAN
                  <FiChevronDown className="inline w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                </th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600 hidden md:table-cell">Order ID</th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600 hidden lg:table-cell">Invoice ID</th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600 hidden lg:table-cell">Date</th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600">Amount</th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600 hidden md:table-cell">Dept</th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600">Remark</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 table-clr">
              {invoiceData.invoiceData.map((invoice, index) => (
                <React.Fragment key={invoice.id}>
                  <tr 
                    className={`cursor-pointer transition-colors duration-200 ${
                      expandedRow === invoice.id 
                        ? 'text-white' 
                        : 'hover:bg-gray-50'
                    }`}
                    style={expandedRow === invoice.id ? {backgroundColor: '#13255B'} : {}}
                    onClick={() => handleRowClick(invoice.id)}
                  >
                    <td className="px-2 sm:px-4 py-3 max-w-8" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(invoice.id)}
                        onChange={() => handleSelectRow(invoice.id)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm max-w-12">{index + 1}</td>
                    <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm font-medium max-w-32 truncate">{invoice.companyName}</td>
                    <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm max-w-30 truncate">{invoice.gstPan}</td>
                    <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm max-w-24 truncate">{invoice.orderId}</td>
                    <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm max-w-24 truncate">{invoice.invoiceId}</td>
                    <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm max-w-24 truncate">{invoice.issuedDate}</td>
                    <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm max-w-30">
                      <span className={expandedRow === invoice.id ? 'text-blue-200' : 'invoice-table-clr'}>₹ {formatAmount(invoice.amount)}</span>
                    </td>
                    <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm max-w-20 truncate">{invoice.department}</td>
                    <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm max-w-32 flex items-center justify-between">
                      <span className="truncate">{invoice.remark}</span>
                      <FiChevronDown 
                        className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 flex-shrink-0 ml-2 ${
                          expandedRow === invoice.id ? 'rotate-180' : ''
                        }`} 
                      />
                    </td>
                  </tr>
                  
                  {expandedRow === invoice.id && (
                    <tr>
                      <td colSpan="10" className="px-2 sm:px-4  report-bg-clr">
                        <div className="bg-white rounded-lg p-3 sm:p-4 report-bg-clr shadow-sm">
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">Remark</h4>
                          <p className="text-xs sm:text-sm  leading-relaxed">
                            {invoice.remarkDetails}
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvoiceReceivedReport;
