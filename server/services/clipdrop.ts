import axios from "axios";
import fs from "fs";
import path from "path";
import FormData from "form-data";

export async function generateImageClipDrop(prompt: string): Promise<string> {
  const form = new FormData();
  form.append("prompt", prompt);

  const response = await axios.post(
    "https://clipdrop-api.co/text-to-image/v1",
    form,
    {
      headers: {
        ...form.getHeaders(),
        "x-api-key": process.env.CLIPDROP_API_KEY!
      },
      responseType: "arraybuffer"
    }
  );

  const fileName = `clipdrop-${Date.now()}.png`;
  const filePath = path.join("images", fileName);

  fs.mkdirSync("images", { recursive: true });
  fs.writeFileSync(filePath, response.data);

  return filePath;
}
