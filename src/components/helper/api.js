export const fetchProducts = async () => {
  const response = await fetch("http://localhost:3004/catalog");
  const data = await response.json();
  return data;
};
