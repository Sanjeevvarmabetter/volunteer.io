import React from 'react';

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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
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

function Card({ children }) {
  return (
    <div className="card border rounded shadow p-4">
      {children}
    </div>
  );
}

function CardContent({ children }) {
  return (
    <div className="card-content">
      {children}
    </div>
  );
}

function Home2() {
  return (
    <div className="container mx-auto p-4">
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-md">
          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <BellIcon className="text-gray-700" />
                <HeartIcon className="text-red-500" />
              </div>
              <h2 className="text-xl font-bold my-4">Welcome to Our Service</h2>
              <p>Explore the opportunities and make a difference through volunteering.</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default Home2;
