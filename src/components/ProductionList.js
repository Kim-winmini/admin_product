import React from 'react';
import { Link } from 'react-router-dom';
import { productionData } from '../data';

const ProductionList = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Production Plan</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <table className="min-w-full bg-gray-800 text-white">
          <thead>
            <tr className="text-left border-b border-gray-700">
              <th className="py-2 px-4">Production ID</th>
              <th className="py-2 px-4">Product</th>
              <th className="py-2 px-4">Quantity</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {productionData.map(item => (
              <tr key={item.id} className="border-t border-gray-700">
                <td className="py-2 px-4">
                  <Link to={`/production/${item.id}`} className="text-blue-400 hover:underline">
                    {item.id}
                  </Link>
                </td>
                <td className="py-2 px-4">{item.product}</td>
                <td className="py-2 px-4">{item.quantity}</td>
                <td className="py-2 px-4">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductionList;