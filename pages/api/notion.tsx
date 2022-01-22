import { Client } from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from "next";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const notionResponse = async (req: NextApiRequest, res: NextApiResponse) => {
  const database_id: any = process.env.NOTION_PROJECTS_ID;
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id,
  });
  res.status(200).json({ results: response.results });
};
export default notionResponse;
