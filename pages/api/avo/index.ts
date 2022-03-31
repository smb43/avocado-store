import DB from "@database";
import { NextApiRequest, NextApiResponse } from "next";

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB();
  const allEntries = await db.getAll();
  const length = allEntries.length;
  response.status(200).json({ data: allEntries, length });
};

export default allAvos;
