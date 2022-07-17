export const fetchProducts = async () => {
  const response = await fetch(process.env.REACT_APP_API_SERVER_URL);
  const data = await response.json();
  return data;
};
