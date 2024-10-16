import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  // Fetch images from your database/storage
  // This is a placeholder for actual fetching logic
  return { images: [] }; // Replace with fetched image data
};

export default function ImageGallery() {
  const { images } = useLoaderData();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.length === 0 ? (
        <p>No images uploaded yet.</p>
      ) : (
        images.map((image: any) => (
          <img
            key={image.id}
            src={image.url}
            alt={image.name}
            className="object-cover w-full h-48"
          />
        ))
      )}
    </div>
  );
}
