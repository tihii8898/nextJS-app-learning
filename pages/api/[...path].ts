// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';

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
  // don't send cookies to API server
  req.headers.cookie = '';

  proxy.web(req, res, {
    target: process.env.API_URL, // Lấy trong file .env.local cho nó tiện
    changeOrigin: true,
    selfHandleResponse: false,
  });

  // res.status(200).json({ name: 'PATH - Match all here' });
}
