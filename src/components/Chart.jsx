import React from 'react';
import data from '../Utilities/Data'; // Import data from Data.js
import Statistics from '../components/Statistics';

const Statics = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">Statistics Page</h1>
            <Statistics data={data} /> 
        </div>
    );
};

export default Statics;
