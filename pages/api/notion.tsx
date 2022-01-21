import { Client } from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from "next";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const notionResponse = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_TESTIMONIAL_ID,
  });
  res.status(200).json({ results: response.results });
};
export default notionResponse;
