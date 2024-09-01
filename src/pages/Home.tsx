import { createRoute, useNavigate } from "@tanstack/react-router";
import { Route } from "../routes/__root";
import { useState } from "react";


const HomePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const navigate = useNavigate({ from: '/' });

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://date.jsontest.com');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError('Error fetching data');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewResult = () => {
    navigate({
      //@ts-ignore
      to: '/result',
      //@ts-ignore
      search: { data: JSON.stringify(data) }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800">Medad Lamptey</h1>
      <h1 className="text-3xl font-bold !mb-6 text-gray-800">React TanStack Router Test</h1>
      <button
        onClick={fetchData}
        disabled={loading}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:bg-blue-300 disabled:cursor-not-allowed"
      >
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {error && <p className="!mt-4 text-red-500">{error}</p>}
      {data && !loading && (
        <button
          onClick={handleViewResult}
          className="!mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          View Result
        </button>
      )}
    </div>
  );
};

export default HomePage;
export const homePageRoute = createRoute({
  getParentRoute: () => Route,
  path: "/",
  component: HomePage
});
