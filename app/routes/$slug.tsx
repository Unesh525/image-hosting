import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;
  // Here, you would fetch image data based on the slug
  return json({ slug }); // Placeholder for image data
};

export default function Slug() {
  const { slug } = useLoaderData<{ slug: string }>(); // Destructure slug from loader data

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-3xl font-bold">Displaying image for ID: {slug}</h1>
      {/* Render the image based on the slug here */}
    </div>
  );
}
