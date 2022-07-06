// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
import Cookies from 'cookies';
// type Data = {
//   name: string;
// };

// ! Cái này để cho NextJS không còn tự động parse cái body trong lúc chuyển đi nữa => Dùng cho (PATCH) https://nextjs.org/docs/api-routes/api-middlewares
export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'Invalid Action ! ! !' });
  }

  const cookies = new Cookies(req, res);
  cookies.set('access_token');

  res.status(200).json({ message: 'Log outed ...' });
}
