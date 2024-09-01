import React from 'react';
import { createRoute, useLocation, useNavigate } from '@tanstack/react-router';
import { Route } from '../routes/__root';

const ResultsPage = () => {
  // Get search params from URL
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const data = queryParams.get('data');

  // Parse JSON data
  const parsedData = data ? JSON.parse(data) : null;

  // Initialize navigation
  const navigate = useNavigate({ from: '/result' });

  const handleGoBack = () => {
    navigate({ to: '/' });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold !mb-8 text-gray-900">Results Page</h1>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        {parsedData ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Fetched Data</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
              <pre className="whitespace-pre-wrap text-gray-800">
                {JSON.stringify(parsedData, null, 2)}
              </pre>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 text-lg">No data available</p>
        )}

        <button
          onClick={handleGoBack}
          className="!mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
export const resultsPageRoute = createRoute({
  getParentRoute: () => Route,
  path: "/result",
  component: ResultsPage
});
