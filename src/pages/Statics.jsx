import React from 'react';
import { ComposedChart, Area, Bar, XAxis, YAxis, Tooltip, Scatter, Legend, ResponsiveContainer } from 'recharts';

const Statistics = ({ data }) => {
    return (
        <div className="p-6 bg-[#9538E2] rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Product Price Statistics</h2>
            <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={data}>
                    <XAxis dataKey="productName" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="price" barSize={20} fill="#413ea0" />
                    <Scatter dataKey="rating" fill="red" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;
