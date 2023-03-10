import { clear } from 'api/cache';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function clearCache(req: NextApiRequest, res: NextApiResponse) {
  const result = await clear();

  res.write(result.toString());
  res.end();
}
