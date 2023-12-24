import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type ApiResponse = {
  success: boolean;
  data?: any;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  try {
    const response = await axios.get(
      "https://dev.to/search/feed_content?per_page=-1&page=0&user_id=1093075&class_name=Article&sort_by=published_at&sort_direction=desc&approved="
    );
    res.status(200).json({ success: true, data: response.data.result });
  } catch (error) {
    res.status(500).json({ success: false, error: "Gagal mengambil data" });
  }
}
