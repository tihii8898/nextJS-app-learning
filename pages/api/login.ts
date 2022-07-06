// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy, { ProxyResCallback } from 'http-proxy';
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
    return res.status(404).json('Invalid Action ! ! !');
  }

  return new Promise((resolve) => {
    // don't send cookies to API server
    req.headers.cookie = '';

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = '';
      proxyRes.on('data', (chunk) => {
        body += chunk;
      });

      proxyRes.on('end', () => {
        try {
          const { accessToken, expiredAt } = JSON.parse(body);

          //convert token to cookies
          const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' });
          cookies.set('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expiredAt),
          });
          (res as NextApiResponse).status(200).json({ message: 'Login successfully <3' });
          // throw new Error('test failure');
        } catch (error) {
          (res as NextApiResponse).status(500).json({ message: 'Something went wrong :(' });
        }

        resolve(true);
      });
    };

    proxy.once('proxyRes', handleLoginResponse);
    // ! dùng promise và proxy.once để cho nextjs đợi đến khi có phản hồi từ proxyserver

    proxy.web(req, res, {
      target: process.env.API_URL, // Lấy trong file .env.local cho nó tiện
      changeOrigin: true,
      selfHandleResponse: true,
    });
  });
  // res.status(200).json({ name: 'PATH - Match all here' });
}
