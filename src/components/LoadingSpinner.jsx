import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-full col-span-full">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16v3a5 5 0 014.546 7.794l1.248-1.248A7 7 0 1116.728 7.272L15.48 8.52A5 5 0 0116 12h-4z"
            ></path>
          </svg>
          <span>Loading...</span>
        </div>
      );
}

export default LoadingSpinner