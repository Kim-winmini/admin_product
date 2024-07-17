import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchShipments } from '../data';

const ShipmentList = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const loadShipments = async () => {
      const data = await fetchShipments();
      setShipments(data);
    };

    loadShipments();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Shipment List</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <table className="min-w-full bg-gray-800 text-white">
          <thead>
            <tr className="text-left border-b border-gray-700">
              <th className="py-2 px-4">Shipment ID</th>
              <th className="py-2 px-4">Product</th>
              <th className="py-2 px-4">Quantity</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map(shipment => (
              <tr key={shipment.shipmentId} className="border-t border-gray-700">
                <td className="py-2 px-4">
                  <Link to={`/shipments/${shipment.shipmentId}`} className="text-blue-400 hover:underline">
                    {shipment.shipmentId}
                  </Link>
                </td>
                <td className="py-2 px-4">{shipment.product}</td>
                <td className="py-2 px-4">{shipment.quantity}</td>
                <td className="py-2 px-4">{shipment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShipmentList;
