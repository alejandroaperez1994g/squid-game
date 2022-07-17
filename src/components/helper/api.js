export const fetchProducts = async () => {
  const response = await fetch(process.env.REACT_APP_API_SERVER_URL);
  const data = await response.json();
  return data;
};

export const getStripeCheckout = async (items) => {
  fetch(process.env.REACT_APP_STRIPE_SERVER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items,
    }),
  });
};
