import type { VercelRequest, VercelResponse } from '@vercel/node';
import { add } from './lib';

export default ({ query }: VercelRequest, res: VercelResponse) => {
  const { name = add(1, 3) } = query;

  return res.json({
    message: `Hello ${name}!`,
  });
};
