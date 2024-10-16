import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">
        Welcome to My Image Hosting Service
      </h1>
      <div className="mt-4">
        <Link to="/upload" className="px-4 py-2 text-white bg-blue-500 rounded">
          Upload Image
        </Link>
        <Link
          to="/gallery"
          className="ml-4 px-4 py-2 text-white bg-green-500 rounded"
        >
          View Gallery
        </Link>
      </div>
    </div>
  );
}
