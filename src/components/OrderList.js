import React from 'react';
import { Link } from 'react-router-dom';
import { orders } from '../data';

const OrderList = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Order List</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <table className="min-w-full bg-gray-800 text-white">
          <thead>
            <tr className="text-left border-b border-gray-700">
              <th className="py-2 px-4">Order ID</th>
              <th className="py-2 px-4">Product</th>
              <th className="py-2 px-4">Quantity</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-t border-gray-700">
                <td className="py-2 px-4">
                  <Link to={`/orders/${order.id}`} className="text-blue-400 hover:underline">
                    {order.id}
                  </Link>
                </td>
                <td className="py-2 px-4">{order.product}</td>
                <td className="py-2 px-4">{order.quantity}</td>
                <td className="py-2 px-4">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
