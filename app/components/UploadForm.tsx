import { json, redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import client from "../../appwriteClient";

export const action = async ({ request }: { request: Request }) => {
  const formData = new FormData(request);
  const file = formData.get("file");

  try {
    const response = await client.storage.createFile(
      "670f64c80031d3eb4ada",
      "unique()",
      file
    );
    return redirect("/gallery");
  } catch (error) {
    return json({ error: error.message });
  }
};

export default function UploadForm() {
  const actionData = useActionData();

  return (
    <form method="post" encType="multipart/form-data" className="mt-4">
      <input type="file" name="file" required className="mb-2" />
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded"
      >
        Upload
      </button>
      {actionData?.error && <p className="text-red-500">{actionData.error}</p>}
    </form>
  );
}
