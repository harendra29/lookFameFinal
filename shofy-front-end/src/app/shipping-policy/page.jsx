import React from "react";

const ShippingPolicy = () => (
  <main className="container mx-auto px-4 py-8 max-w-3xl">
    <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>
    <ul className="list-disc ml-6 space-y-2">
      <li>We offer free shipping on the orders sitewide.</li>
      <li>We process orders within 24-48 hours and ship them from Udaipur, Rajasthan.</li>
      <li>We ship PAN India and our mission is to serve every region of Bharat, ensuring accessibility to our products for all.</li>
      <li>Order Delivery Time: In metropolitan areas, orders are delivered within 1-4 days after processing. While in the rest of Bharat, delivery takes 4-7 days after processing.</li>
    </ul>
    <p className="mt-4">
      To know about our Returns, Exchange, and Refund Policies, <a href="/return-refund-and-cancellation" className="text-blue-600 underline">click here</a>.
    </p>
    <p className="mt-2">
      You can easily track your order status <a href="https://www.lookfame.com/customer-shipment-track" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">here</a> or access manually in My Account &gt;&gt; Track Your Order section.
    </p>
  </main>
);

export default ShippingPolicy;
