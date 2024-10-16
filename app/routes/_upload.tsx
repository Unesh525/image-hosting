import UploadForm from "~/components/UploadForm";

export default function Upload() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-3xl font-bold">Upload Image</h1>
      <UploadForm />
    </div>
  );
}
