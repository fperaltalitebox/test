import { NextApiRequest, NextApiResponse } from 'next';
import { getApp } from '@/backend/src/main';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return new Promise(async resolve => {
    const listener = await getApp();
    listener(req, res);
    res.on('finish', resolve);
  });
}
