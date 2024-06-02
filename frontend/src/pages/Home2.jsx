import React from 'react';

function Dash() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-green-600 py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <img src="/mnt/data/image.png" alt="Voluntrove Logo" className="h-10" />
            <img src="/mnt/data/image.png" alt="G2 Logo" className="h-5" />
            <img src="/mnt/data/image.png" alt="Tech Radar Logo" className="h-5" />
            <img src="/mnt/data/image.png" alt="Product Hunt Logo" className="h-5" />
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">Support</a>
            <button className="border border-white text-white hover:border-gray-200 hover:text-gray-200 px-4 py-1">LOGOUT</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 px-4">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <select className="border border-gray-300 p-2 rounded">
              <option>Category</option>
            </select>
            <select className="border border-gray-300 p-2 rounded">
              <option>Place</option>
            </select>
            <select className="border border-gray-300 p-2 rounded">
              <option>Month</option>
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl text-green-600">WELCOME VOLUNTEER.</h1>
            <HeartIcon className="w-6 h-6 text-pink-500" />
            <BellIcon className="w-6 h-6 text-yellow-500" />
            <img src="/mnt/data/image.png" alt="User Avatar" className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-6 px-4">
        <h2 className="text-2xl text-green-600 mb-4">Awareness campaign</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-pink-500 text-white p-4 rounded">
            <img src="/mnt/data/image.png" alt="Campaign Image" className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">It's OK to not feel OK.</h3>
            <p className="text-sm">
              Join us for a mental health awareness campaign and be a part of change. Together, let's create a safe space for everyone to speak up and reach out.
            </p>
          </div>
          <div className="bg-yellow-500 text-white p-4 rounded">
            <img src="/mnt/data/image.png" alt="Campaign Image" className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">Stand with the planet.</h3>
            <p className="text-sm">
              Take an active role in our environmental conservation campaigns. Your small steps can lead to a significant impact. Together, let's make our Earth a better place!
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-6 px-4">
        <div className="bg-white p-6 rounded shadow">
          <div className="flex items-center space-x-4">
            <BellIcon className="w-6 h-6 text-gray-700" />
            <StarIcon className="w-6 h-6 text-red-500" />
          </div>
          <h2 className="text-xl my-4">Welcome to Our Service</h2>
          <p>Explore the opportunities and make a difference through volunteering.</p>
        </div>
      </div>
    </div>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default Dash;
