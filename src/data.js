const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchOrders = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/get_orders`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};

export const moveOrderToProduction = async (orderID) => {
  try {
    const response = await fetch(`${API_BASE_URL}/update_order_status_to_in_production`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderID }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error moving order to production:', error);
    return null;
  }
};

export const moveOrderToShipped = async (orderID) => {
  try {
    const response = await fetch(`${API_BASE_URL}/update_order_status_to_shipped`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderID }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    // 주문 상태 업데이트 후 주문 세부 정보를 SNS로 전송
    const snsResponse = await sendOrderDetailsToSNS(orderID);
    return { ...data, snsResponse };
  } catch (error) {
    console.error('Error moving order to shipped:', error);
    return null;
  }
};

export const sendOrderDetailsToSNS = async (orderID) => {
  try {
    const response = await fetch(`${API_BASE_URL}/send_order_details_to_sns`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderID })
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending order details to SNS:', error);
    return null;
  }
};
