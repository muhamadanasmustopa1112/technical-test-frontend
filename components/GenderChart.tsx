'use client';

import { fetchGenderStats } from '@/app/services/api';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#8884d8', '#82ca9d'];

const GenderChart = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const stats = await fetchGenderStats();
      const formatted = stats.map((item) => ({
        name: item._id,
        value: item.count
      }));
      setData(formatted);
    };
    load();
  }, []);

  return (
    <div className="p-4 w-full">
      <h2 className="text-xl font-bold mb-4">Gender Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GenderChart;
