import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="flex-col items-center justify-center h-screen min-w-full bg-black text-white text-center transition-background duration-500 hover:bg-gray-800">
            <h1 className="text-4xl font-bold mb-8">Welcome to the Dashboard</h1>
            <Outlet />
            <p className="mt-8">
                This is the dashboard page. You can add more components and features here.
            </p>
        </div>
    )
};

export default Dashboard;
