import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  // Mock data for tenant information
  const tenantInfo = {
    companyName: 'Example Company',
    vatNumber: 'VAT123456789',
  };

  // Mock data for vehicle status overview
  const vehicleData = {
    totalVehicles: 35,
    inService: 30,
    inStock: 5,
  };

  // Mock data for user counts
  const userData = {
    totalEmployees: 33,
    totalAdmins: 2,
  };

  // Mock data for vehicle types
  const vehicleTypes = [
    { type: 'Petrol', count: 7 },
    { type: 'Diesel', count: 8 },
    { type: 'Hybrid - Petrol', count: 8 },
    { type: 'Hybrid - Diesel', count: 9 },
    { type: 'Electric', count: 3 },
  ];

  // Data for vehicle type chart
  const vehicleTypeData = {
    labels: vehicleTypes.map(v => v.type),
    datasets: [{
      data: vehicleTypes.map(v => v.count),
      backgroundColor: ['#003F5C', '#58508D', '#BC5090', '#FF6361', '#FFA600'],
    }],
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/5 bg-customDarkBlue shadow-md border-t border-gray-600">
        <div className="p-4">
          <h2 className="text-xl font-bold text-white">Dashboard</h2>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="flex items-center p-4 hover:bg-customBlue cursor-pointer text-white border-b border-gray-600">
              <i className="fi fi-rr-home mr-2" style={{ marginTop: '2px' }}></i> Home 
            </li>
            <li className="flex items-center p-4 hover:bg-customBlue cursor-pointer text-white border-b border-gray-600">
              <i className="fi fi-rr-car-side mr-2" style={{ marginTop: '2px' }}></i> Fleet Management 
            </li>
            <li className="flex items-center p-4 hover:bg-customBlue cursor-pointer text-white border-b border-gray-600">
              <i className="fi fi-rr-employee-man-alt mr-2" style={{ marginTop: '2px' }}></i> Employee Management 
            </li>
            <li className="flex items-center p-4 hover:bg-customBlue cursor-pointer text-white border-b border-gray-600">
              <i className="fi fi-rr-stats mr-2" style={{ marginTop: '2px' }}></i> Statistics & Reports 
            </li>
            <li className="flex items-center p-4 hover:bg-customBlue cursor-pointer text-white">
              <i className="fi fi-rr-customize mr-2" style={{ marginTop: '2px' }}></i> Custom Field Management 
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        {/* Tenant Information */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-700">Tenant Information</h3>
          <p className="text-gray-600">Company Name: {tenantInfo.companyName}</p>
          <p className="text-gray-600">VAT Number: {tenantInfo.vatNumber}</p>
        </div>

        {/* Overview Cards (Total Vehicles and Employees) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-700">Total Vehicles</h3>
            <p className="text-3xl font-bold text-blue-600">{vehicleData.totalVehicles}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-700">In Service</h3>
            <p className="text-3xl font-bold text-green-600">{vehicleData.inService}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-700">In Stock</h3>
            <p className="text-3xl font-bold text-red-600">{vehicleData.inStock}</p>
          </div>
        </div>

        {/* User Counts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-700">Total Employees</h3>
            <p className="text-3xl font-bold text-blue-600">{userData.totalEmployees}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-700">Total Admins</h3>
            <p className="text-3xl font-bold text-green-600">{userData.totalAdmins}</p>
          </div>
        </div>

        {/* Vehicle Type Overview and Recent Activity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Vehicle Type Overview */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-700">Vehicle Type Overview</h3>
            <Pie data={vehicleTypeData} />
          </div>

          {/* Recent Activity Log */}
          <div className="bg-white shadow-md rounded-lg p-4 h-full">
            <h3 className="text-lg font-semibold text-gray-700">Recent Activity</h3>
            {/* Updated recent activities as cards */}
            <div className="space-y-4 mt-2">
              {/* Activity Item */}
              <div className="flex items-center">
                <span className={`w-2.5 h-2.5 rounded-full bg-blue-600`}></span>
                <div className="bg-customBlue p-2 rounded-lg ml-2 flex items-center justify-between w-full py-2 shadow-md">
                  <p className="text-white">A vehicle has been added.</p>
                  <div className={`ml-2 p-1 rounded-lg text-white bg-customLightBlue`}> 
                    {new Date().toLocaleDateString()}
                  </div>
                </div>
              </div>
              {/* Activity Item */}
              <div className="flex items-center">
                <span className={`w-2.5 h-2.5 rounded-full bg-blue-600`}></span>
                <div className="bg-customBlue p-2 rounded-lg ml-2 flex items-center justify-between w-full py-2 shadow-md">
                  <p className="text-white">A vehicle is out of commission.</p>
                  <div className={`ml-2 p-1 rounded-lg text-white bg-customLightBlue`}> 
                     {new Date().toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;