import ImageGallery from "~/components/ImageGallery";

export default function Gallery() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-3xl font-bold">Image Gallery</h1>
      <ImageGallery />
    </div>
  );
}
